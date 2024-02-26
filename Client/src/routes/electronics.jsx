import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { fetchProjectsByType } from "../functions/projectFunctions.js";

export default function ElectronicsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await fetchProjectsByType("electronics");
        setProjects(projectsData);
      } catch (error) {
        console.log("Fetching projects error:", error);
      }
    };

    fetchData();
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
      <NavbarComponent navTitle="Electronics" />
      <ParticlesBackground />
      <div className="pel">
        <ContainingPart projects={projects} />
      </div>
    </>
  );
}
