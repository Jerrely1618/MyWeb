import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
export default function ComputerPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const card = document.querySelector(".card-container");
      const navbarBottom = navbar.getBoundingClientRect().bottom;
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < navbarBottom) {
        navbar.style.backgroundColor = "yellow";
      } else {
        navbar.style.backgroundColor = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const fetchProjects = async () => {
      const projectType = "computer";
      try {
        const response = await fetch(
          `http://localhost:3000/api/projects/${projectType}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Fetching error:", error);
      }
    };
    fetchProjects();
  }, []);
  useEffect(() => {
    const pel = document.querySelector(".pel");
    const _ = pel.offsetHeight;
    anime({
      targets: ".pel",
      opacity: [0, 1],
      scale: [0.2, 1],
      duration: 1500,
    });
  }, []);
  return (
    <>
      <NavbarComponent navTitle="Coding" />
      <ParticlesBackground />
      <div className="pel">
        <ContainingPart projects={projects} />
      </div>
    </>
  );
}
