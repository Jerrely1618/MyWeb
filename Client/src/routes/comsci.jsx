import NavbarComponent from "../components/nav/nav.jsx";
import ParticlesBackground from "../components/pbackground/pbackground.jsx";
import ContainingPart from "../components/ContainingPart/ContainingPart.jsx";
export default function ComputerPage() {
  return (
    <div>
      <NavbarComponent navTitle="Coding" />
      <ParticlesBackground />
      <ContainingPart />
    </div>
  );
}
