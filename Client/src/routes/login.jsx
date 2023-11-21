import NavbarComponent from "../../components/navpage.jsx";
import ParticlesBackground from "../../components/pbackground.jsx";
import "rc-banner-anim/assets/index.css";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import Button from "@mui/material/Button";
import { le_colors } from "../../public/constantsColors.js";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";

import { Tabs } from "antd";

export default function LoginPage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const handleButtonClick = () => {
    anime({
      targets: ".el", // Replace this with the appropriate CSS selector for your element
      translateX: animationComplete ? 0 : "-100vw",

      easing: "easeInOutQuad", // You can customize the easing function
      duration: 1500,
      borderRadius: ["100%", "100%"],
      complete: () => {
        setAnimationComplete(!animationComplete);
      },
    });
  };

  return (
    <div>
      <NavbarComponent navTitle="Jerrely Portfolio" />
      <ParticlesBackground />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: "10px",
        }}
      >
        <div className="css-prop-demo">
          <div
            className="el"
            style={{
              width: "50vw",
              height: "50vh",
              background: "white",
              position: "fixed",
              left: "150vw",
              top: "30%",
              backgroundColor: le_colors.third,
              borderRadius: "40px",
              borderColor: le_colors.third,
              borderWidth: "4px",
              borderStyle: "solid",
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
        <h1 className="text-container">Oh no! You Hacker!</h1>
        <p>You have found my login page</p>
        <Button
          onClick={handleButtonClick}
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: le_colors.secondary,
            color: le_colors.secondary,
            background: "white",
            fontWeight: "bold",
          }}
        >
          Anyway
        </Button>
      </div>
    </div>
  );
}
