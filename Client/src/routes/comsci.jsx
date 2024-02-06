import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
import { coding_projects } from "../constants/projects/codingprojects.js";
import { useEffect, useState } from "react";

export default function ComputerPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectType = "coding";
      try {
        const response = await fetch(`/api/projects/${projectType}`);
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

  return (
    <>
      <NavbarComponent navTitle="Coding" />
      <ParticlesBackground />
      <ContainingPart projects={projects} />
    </>
  );
}
