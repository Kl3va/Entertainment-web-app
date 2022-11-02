import React from 'react'
//Form validation
import { useFormik } from 'formik'
import * as Yup from 'yup'

//Firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app, database } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

//Toastify package
import { toast } from 'react-toastify'

import styles from 'Pages/Login/login.module.scss'
import Button from 'Components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from 'Hooks/context'

const Form = ({
  heading,
  emailPlaceholder,
  passwordPlaceholder,
  btnText,
  paragraph,
  linkText,
}) => {
  const auth = getAuth()
  const navigate = useNavigate()
  const { setMovieData, setUserID } = useGlobalContext()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required("Can't be empty"),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required("Can't be empty"),
    }),
    onSubmit: async (values, { resetForm }) => {
      //Submitting user's details for verification
      let oldUser
      try {
        oldUser = await signInWithEmailAndPassword(
          auth,
          formik.values.email,
          formik.values.password
        )
        toast.success('Logged In Successfully')
        resetForm()
        navigate('/')
      } catch (error) {
        toast.error(error.message)
      }
      const { user } = oldUser
      setUserID(user.uid)

      //Getting logged in user's data from firebase
      const docRef = doc(database, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      //Storing said data into state via context API
      const moviesArr = docSnap.data()
      setMovieData(moviesArr.movieData)
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
          {/*<p className={styles.error}>{formik.errors.email}</p>*/}

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
              formik.touched.password && formik.errors.password
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
        <Button btnText={btnText} />
        <div className={styles.linkto}>
          <p>{paragraph}</p>
          <Link to='/signup'>{linkText}</Link>
        </div>
      </form>
    </div>
  )
}

export default Form
