import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import "rc-banner-anim/assets/index.css";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import Button from "@mui/material/Button";
import { le_colors } from "../../constants/constants.js";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";
import "./login.css";

export default function LoginPage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const handleButtonClick = () => {
    anime({
      targets: ".el",
      translateX: animationComplete ? 0 : "-100vw",
      easing: "easeInOutQuad",
      duration: 1500,
      borderRadius: ["100%", "10%"],
      complete: () => {
        setAnimationComplete(!animationComplete);
      },
    });
  };

  return (
    <>
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
          <div className="el">
            <div>
              <h1>Dev Login</h1>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
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
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
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
          className="lebutton"
        >
          Anyway
        </Button>
      </div>
    </>
  );
}
