import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
import { coding_projects } from "../constants/projects/codingproject.js";

export default function ComputerPage() {
  return (
    <>
      <NavbarComponent navTitle="Coding" />
      <ParticlesBackground />
      <ContainingPart projects={coding_projects} />
    </>
  );
}
