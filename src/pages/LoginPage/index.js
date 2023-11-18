import React from "react";
import styles from "./styles.module.css";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    //TODO: CALL API LOGIN
    const response = {
      success: true,
      token: "ABCXYZ",
    };

    // if success =>  save token to localstorage + redirect to /admin
    if (response.success) {
      localStorage.setItem("access-token", response.token);
      navigate("/admin/user");
    } else {
      notification.error({
        message: "Login Fail!",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        duration: 3,
      });
    }
    // if fail => notification
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.loginPage}>
      <h1>MY APP</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: 600,
        }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
