import NavbarComponent from "../components/navpage.jsx";
import ParticlesBackground from "../components/pbackground.jsx";
import { le_colors } from "../public/constantsColors.js";

export default function HomePage() {
  return (
    <div>
      <NavbarComponent navTitle="Jerrely Portfolio" />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingLeft: "10px",
        }}
      >
        <h1 style={{ fontWeight: "bold" }} className="text-container">
          Welcome to my Portfolio!
        </h1>
      </div>
      <ParticlesBackground />
      <a
        style={{
          fontSize: "75px",
          bottom: 0,
          right: 0,
          position: "fixed",
          color: "white",
        }}
        href="/logindev"
      >
        Oh no!
      </a>
    </div>
  );
}
