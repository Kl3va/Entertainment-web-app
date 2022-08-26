import React from 'react'

//Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app, database } from '../../firebaseConfig'
//import { collection, addDoc } from 'firebase/firestore'

//Toastify package
import { toast } from 'react-toastify'

//Form validation
import { useFormik } from 'formik'
import * as Yup from 'yup'

import styles from 'Pages/Login/login.module.scss'
import Button from 'Components/Button'
import { Link, useNavigate } from 'react-router-dom'

import { useGlobalContext } from 'Hooks/context'

const SignUpForm = ({
  heading,
  emailPlaceholder,
  passwordPlaceholder,
  repeatPlaceholder,
  btnText,
  paragraph,
  linkText,
}) => {
  const auth = getAuth()
  const navigate = useNavigate()
  //const { user } = useGlobalContext()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required("Can't be empty"),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required("Can't be empty"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must watch')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      /* createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((response) => {
          // console.log(response.user)
          toast.success('Signed In Successfully')
          resetForm()
          navigate('/')
        })
        .catch((error) => toast.error('User Already Exists'))
      console.log(response.user)*/
      let newUser
      try {
        newUser = await createUserWithEmailAndPassword(
          auth,
          formik.values.email,
          formik.values.password
        )
        toast.success('Signed In Successfully')
        resetForm()
        navigate('/')
        //return user.uid
      } catch (error) {
        toast.error('User Already Exists')
      }
      const { user } = newUser
      console.log(user.uid)
    },
  })

  return (
    <div className={styles.formcontainer}>
      <h1>{heading}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.wrapper}>
          <input
            type='email'
            value={formik.values.email}
            name='email'
            id='email'
            className={`${
              formik.touched.email && formik.errors.email
                ? `${styles.field} ${styles.invalid}`
                : styles.field
            }`}
            placeholder={emailPlaceholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.error}>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className={styles.wrapper}>
          <input
            type='password'
            value={formik.values.password}
            name='password'
            id='password'
            className={`${
              formik.touched.email && formik.errors.email
                ? `${styles.field} ${styles.invalid}`
                : styles.field
            }`}
            placeholder={passwordPlaceholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.error}>{formik.errors.password}</p>
          ) : null}
        </div>
        <div className={styles.wrapper}>
          <input
            type='password'
            value={formik.values.confirmPassword}
            name='confirmPassword'
            id='confirmPassword'
            className={`${
              formik.touched.email && formik.errors.email
                ? `${styles.field} ${styles.invalid}`
                : styles.field
            }`}
            placeholder={repeatPlaceholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className={styles.error}>{formik.errors.confirmPassword}</p>
          ) : null}
        </div>
        <Button btnText={btnText} />
        <div className={styles.linkto}>
          <p>{paragraph}</p>
          <Link to='/login'>{linkText}</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
