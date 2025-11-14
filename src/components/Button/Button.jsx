import styles from "./Button.module.css";

const Button = ({ buttonName }) => {
  return <button className={styles.button}>{buttonName}</button>;
};

export default Button;
