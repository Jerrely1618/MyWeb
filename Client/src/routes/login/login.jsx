import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from "antd";

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
      <div className="relative z-10 pl-2.5">
        <div className="w-1/2 h-1/2 fixed left-[150vw] top-1/3 bg-[var(--le_colors_secondary)] rounded-[40px] border-[var(--le_colors_primary)] border-2 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <h1>Dev Login</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
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
                  { required: true, message: "Please input your Password!" },
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
                <button
                  type="submit"
                  className="login-form-button bg-primary text-white"
                >
                  Log in
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <h1 className="text-container">Oh no! You Hacker!</h1>
        <p>You have found my login page</p>
        <button
          onClick={handleButtonClick}
          className="border border-[var(--le_colors_secondary)] text-[var(--le_colors_secondary)] bg-white font-bold"
        >
          Anyway
        </button>
      </div>
    </>
  );
}
