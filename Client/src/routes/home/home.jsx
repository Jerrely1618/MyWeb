import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import "./home.css";
import "../../constants/colors/colors.css";

export default function HomePage() {
  return (
    <>
      <NavbarComponent navTitle="Jerrely Portfolio" />
      <div>
        <h1 className="text-container">Welcome to my</h1>
        <h1 className="text-container big">Portfolio!</h1>
      </div>
      <ParticlesBackground />
      <a className="fixed-link" href="/MyWeb/logindev">
        Oh no!
      </a>
    </>
  );
}
