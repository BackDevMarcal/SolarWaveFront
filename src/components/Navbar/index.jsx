import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/image1.png";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function BasicExample() {
  const location = useLocation();
  const isLoggedRoute =
    location.pathname === "/LogadoProd" || location.pathname === "/logado";
  return (
    <Navbar expand="lg">
      <Container className="m-3">
        <Navbar.Brand>
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" style={{ color: "#333027" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/logado" style={{ color: "#333027" }}>
              Tela do Cooporação
            </Nav.Link>
            <Nav.Link href="/LogadoProd" style={{ color: "#333027" }}>
              Tela do Geradores
            </Nav.Link>
            {!isLoggedRoute && (
              <Nav.Link
                as={Link} // Use o componente Link do React Router
                to="/login"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#3D75FF",
                  marginLeft: "10px",
                  color: "#333027",
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
