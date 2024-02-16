import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import "./home.css";
import "../../constants/colors/colors.css";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    anime({
      targets: ".welcome",
      translateX: [-1000, 10],
      easing: "easeInOutSine",
      duration: 750,
      autoplay: true,
    });
  }, []);
  useEffect(() => {
    anime({
      targets: ".portfolio",
      translateX: [10, 900],
      easing: "easeInOutSine",
      direction: "reverse",
      duration: 750,
      autoplay: true,
    });
  }, []);
  return (
    <>
      <div className="main">
        <NavbarComponent navTitle="Jerrely Portfolio" />
        <div>
          <h1 className="welcome text-container ">Welcome to the</h1>
          <h1 className="portfolio text-container big ">Portfolio!</h1>
        </div>
      </div>
      <ParticlesBackground />
      <a className="fixed-link" href="/logindev">
        Oh no!
      </a>
    </>
  );
}
