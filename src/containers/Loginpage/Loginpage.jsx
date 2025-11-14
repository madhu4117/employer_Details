import styles from "./Loginpage.module.css";
import LoginForm from "../../components/Login Form/LoginForm.jsx";
import loginImage from "../../assets/loginImage.png";

const Loginpage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginImage}>
        <img src={loginImage} alt="loginImage" />
      </div>

      <div className={styles.loginDetailsSection}>
        <div className={styles.loginFormSection}>
          <h1>
            WELCOME TO <span>EMPLOYEE MANAGEMENT SYSTEM</span>
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
