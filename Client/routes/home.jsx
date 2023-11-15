import NavbarComponent from "../components/navpage.jsx";
export default function HomePage() {
  return (
    <div>
      <NavbarComponent navTitle="Jerrely Portfolio" />
      <div style={{ paddingLeft: "10px" }}>
        <h1> Welcome!</h1>
        <p>To My Portfolio</p>
      </div>
    </div>
  );
}
