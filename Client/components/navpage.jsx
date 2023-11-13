// NavbarComponent.js
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

export default function NavbarComponent({ navTitle }) {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="white"
      key="sm"
      expand="sm"
      className="bg-body-tertiary mb-3"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">{navTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Electronics"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Coding"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="/com">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Contact"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="https://www.linkedin.com/in/jerrelyv">
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/Jerrely1618">
                  Github
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
  navTitle: PropTypes.string.isRequired, // Define the prop type for navTitle
};
