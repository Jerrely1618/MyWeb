import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
import { useEffect, useState } from "react";
export default function ElectronicsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectType = "electronics";
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
  return (
    <>
      <NavbarComponent navTitle="Electronics" />
      <ParticlesBackground />
      <ContainingPart projects={projects} />
    </>
  );
}
