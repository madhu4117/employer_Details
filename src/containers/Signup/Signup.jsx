import styles from "./Signup.module.css";
import SignupForm from "../../components/Signup Form/SignupForm";
import loginImage from "../../assets/loginImage.png";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.loginImage}>
        <img src={loginImage} alt="loginImage" />
      </div>

      <div className={styles.signupDetailsSection}>
        <div className={styles.signupFormSection}>
          <h1>
            SIGN UP TO <span>EMPLOYEE MANAGEMENT SYSTEM</span>
          </h1>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;