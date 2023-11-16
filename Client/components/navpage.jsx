import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function NavbarComponent({ navTitle }) {
  return (
    <Navbar
      bg="transparent"
      data-bs-theme="white"
      key="sm"
      expand="sm"
      className="bg-body-tertiary mb-3 pl-3"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">{navTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Electronics</Nav.Link>
              <Nav.Link href="/com">Coding</Nav.Link>
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
