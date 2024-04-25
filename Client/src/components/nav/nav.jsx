import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import {
  GithubOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./nav.css";
import { Link } from "react-router-dom";

export default function NavbarComponent({ navTitle }) {
  return (
    <Navbar
      key="sm"
      expand="sm"
      className=" mb-3 pl-3 navbar text-one transparent  navbar-dark navbar-custom"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="flex">
          <h4 className="hover:text-one text-white ">JV Develops</h4>
          {navTitle && <span className="text-one px-2"> | </span>}
          <h4 className="text-one hover:text-white"> {navTitle}</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
          className="offcanvas-custom bg-dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="text-primary"
              id={`offcanvasNavbarLabel-expand-sm`}
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="text-one justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>{" "}
              <Nav.Link as={Link} to="/ee">
                Electronics
              </Nav.Link>{" "}
              <Nav.Link as={Link} to="/cs">
                Coding
              </Nav.Link>
              <NavDropdown
                title="Contact"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="https://www.linkedin.com/in/jerrelyv">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LinkedinOutlined style={{ marginRight: "8px" }} />
                    LinkedIn
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/Jerrely1618">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    Github
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/@DchangeinTech">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <YoutubeOutlined style={{ marginRight: "8px" }} />
                    YT Channel
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

NavbarComponent.propTypes = {
  navTitle: PropTypes.string.isRequired,
};
