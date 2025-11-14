import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import styles from "./SignupForm.module.css";
import axios from "axios";

const SignupForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log("These are the values sent from Frontend", values);
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        values
      );
      localStorage.setItem("token", response.data.token);
      console.log("These are the values received from Backend",response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log("Error signing up", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.SignupForm}>
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

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <div className={styles.linksRow}>
          <Link to="/login" className={styles.register}>
            Already a user? <span>Login</span>
          </Link>
        </div>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
