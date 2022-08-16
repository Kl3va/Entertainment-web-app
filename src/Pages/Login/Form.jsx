import React from 'react'
//Form validation
import { useFormik } from 'formik'
import * as Yup from 'yup'

import styles from 'Pages/Login/login.module.scss'
import Button from 'Components/Button'
import { Link } from 'react-router-dom'

const Form = ({
  heading,
  emailPlaceholder,
  passwordPlaceholder,
  btnText,
  paragraph,
  linkText,
}) => {
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
    onSubmit: (values, { resetForm }) => {
      resetForm()
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
