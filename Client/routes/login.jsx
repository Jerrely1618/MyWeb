import NavbarComponent from "../components/navpage.jsx";
import ParticlesBackground from "../components/pbackground.jsx";
import "rc-banner-anim/assets/index.css";
import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import Button from "@mui/material/Button";
import { colors } from "@mui/material";
import { le_colors } from "../public/constantsColors.js";

export default function LoginPage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const handleButtonClick = () => {
    anime({
      targets: ".el", // Replace this with the appropriate CSS selector for your element
      translateX: animationComplete ? 0 : "200vw",
      easing: "easeInOutQuad", // You can customize the easing function
      duration: 1000,
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
          zIndex: 1,
          paddingLeft: "10px",
        }}
      >
        <div
          className="el"
          style={{
            width: "100vw",
            height: "50vh",
            background: "white",
            position: "fixed",
            left: "-150vw",
            top: "30%",
            borderRadius: "20px",
            borderColor: le_colors.third,
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <div style={{ top: "50%" }}>
            <h1>s</h1>
          </div>
        </div>

        <h1 className="text-container">Oh no! You Hacker!</h1>
        <p>You have found my login page</p>
        <Button
          onClick={handleButtonClick}
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: le_colors.third,
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
