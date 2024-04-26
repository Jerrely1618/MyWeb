import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import "./home.css";
import "../../constants/colors/colors.css";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
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
      translateX: [-1000, 0],
      easing: "easeInOutSine",
      duration: 750,
      autoplay: true,
      complete: () => {},
    });
    anime({
      targets: ".victor",
      translateX: [0, 900],
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
        <NavbarComponent />
        <div className="px-2 sm:px-10">
          <h1 className="zen-of text-5xl font-bold text-[#efefe4] sm:text-4xl xs:text-3xl">
            Jerrely Vizueta
          </h1>
          <h1 className="victor text-5xl font-bold text-one sm:text-7xl xs:text-5xl">
            Software Engineer
          </h1>
          <h3
            ref={portfolioRef}
            className="portfolio text-2xl  font-bold text-[#efefe4]"
          ></h3>
          <div className="flex space-x-2">
            <a
              href="https://www.linkedin.com/in/jerrelyv"
              className="bg-two hover:bg-one text-white rounded-xl text-4xl w-14 h-14 flex items-center justify-center transition-all duration-150 ease-in-out transform hover:scale-95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-4xl" />
            </a>

            <a
              href="https://github.com/Jerrely1618"
              className="bg-two hover:bg-one text-white rounded-xl text-4xl w-14 h-14 flex items-center justify-center transition-all duration-150 ease-in-out transform hover:scale-95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>

      <ParticlesBackground />
      {/* <Link to="/logindev" className="fixed-link text-two">
        Oh no!
      </Link> */}
    </>
  );
}
