import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import "./home.css";
import "../../constants/colors/colors.css";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const portfolioRef = useRef(null);
  const textContent = "The Portfolio";

  useEffect(() => {
    // Preparing the text content for typewriter effect
    if (portfolioRef.current) {
      portfolioRef.current.innerHTML = textContent
        .split("")
        .map((char) => `<span style="opacity: 0;">${char}</span>`) // Set opacity to 0 right here
        .join("");
    }

    // Begin initial animations
    anime({
      targets: ".zen-of",
      translateX: [-1000, 10],
      easing: "easeInOutSine",
      duration: 750,
      autoplay: true,
      complete: () => {},
    });
    anime({
      targets: ".victor",
      translateX: [10, 900],
      easing: "easeInOutSine",
      direction: "reverse",
      duration: 750,
      autoplay: true,
      complete: () => {
        anime({
          targets: portfolioRef.current.querySelectorAll("span"),
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 200,
          delay: anime.stagger(100),
        });
      },
    });
  }, [textContent]);

  return (
    <>
      <div className="relative z-10">
        <NavbarComponent navTitle="Jerrely Portfolio" />
        <div>
          <h1 className="zen-of text-7xl font-bold text-[#efefe4] sm:text-8xl xs:text-6xl xs:ml-4">
            Work of
          </h1>
          <h1 className="victor text-5xl pl-2 font-bold text-fourth sm:text-7xl xs:text-5xl">
            Victor
          </h1>
          <h3
            ref={portfolioRef}
            className="portfolio text-3xl pl-8 font-bold text-[#efefe4]"
          ></h3>
        </div>
      </div>
      <ParticlesBackground />
      <Link to="/logindev" className="fixed-link">
        Oh no!
      </Link>
    </>
  );
}
