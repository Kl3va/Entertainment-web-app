import React from "react";
import styles from "Pages/Login/login.module.scss";
import Button from "Components/Button";
import { Link } from "react-router-dom";

const SignUpForm = ({
  heading,
  emailPlaceholder,
  passwordPlaceholder,
  repeatPlaceholder,
  btnText,
  paragraph,
  linkText,
}) => {
  return (
    <div className={styles.formcontainer}>
      <h1>{heading}</h1>
      <div className={styles.wrapper}>
        <input
          type="email"
          //value=""
          name="email"
          id="email"
          className={styles.field}
          placeholder={emailPlaceholder}
          onChange={""}
          onBlur={""}
        />
        <p className={styles.error}>{"error"}</p>
      </div>
      <div className={styles.wrapper}>
        <input
          type="password"
          //value=""
          name="password"
          id="password"
          className={styles.field}
          placeholder={passwordPlaceholder}
          onChange={""}
          onBlur={""}
        />
        <p className={styles.error}>{"error"}</p>
      </div>
      <div className={styles.wrapper}>
        <input
          type="password"
          //value=""
          name="password"
          id="password"
          className={styles.field}
          placeholder={repeatPlaceholder}
          onChange={""}
          onBlur={""}
        />
        <p className={styles.error}>{"error"}</p>
      </div>
      <Button btnText={btnText} />
      <div className={styles.linkto}>
        <p>{paragraph}</p>
        <Link to="/login">{linkText}</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
