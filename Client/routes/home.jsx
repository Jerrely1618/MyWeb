import NavbarComponent from "../components/navpage.jsx";
import ParticlesBackground from "../components/pbackground.jsx";

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
        <h1 className="text-container">Welcome to my Portfolio!</h1>
      </div>
      <ParticlesBackground />
    </div>
  );
}
