import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
import { electronics_projects } from "../constants/projects/electronicprojects.js";

export default function ElectronicsPage() {
  return (
    <>
      <NavbarComponent navTitle="Electronics" />
      <ParticlesBackground />
      <ContainingPart projects={electronics_projects} />
    </>
  );
}
