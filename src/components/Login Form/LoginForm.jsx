import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import styles from "./LoginForm.module.css";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log("These are the values sent from Frontend", values);
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );
      localStorage.setItem("token", response.data.token);
      console.log("These are the values received from Backend", response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log("Error loging in", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.LoginForm}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <div className={styles.linksRow}>
          <Link to="/forgot-password" className={styles.forgotPassword}>
            Forgot Password
          </Link>
          <Link to="/register" className={styles.register}>
            Don't have account? <span>Sign up</span>
          </Link>
        </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
