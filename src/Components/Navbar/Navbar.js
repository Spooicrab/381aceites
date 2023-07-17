import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.png";
import CartWidget from "../CartWidget/Cartwidget";
import { Link } from "react-router-dom";

function NavbarAceites() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo aceites"
            style={{
              height: "30px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Nav> Inicio </Nav>
            </Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <Link to="/Categorias">
                <NavDropdown.Item>Motul</NavDropdown.Item>
              </Link>
              <Link to="/Categorias">
                <NavDropdown.Item>Total</NavDropdown.Item>
              </Link>
              <Link to="/Categorias">
                <NavDropdown.Item>Elaion</NavDropdown.Item>
              </Link>
              <Link to="/Categorias">
                <NavDropdown.Item>Gulf</NavDropdown.Item>
              </Link>
              <Link to="/Categorias">
                <NavDropdown.Item>Valvoline</NavDropdown.Item>
              </Link>
              <Link to="/Categorias">
                <NavDropdown.Item>Shell</NavDropdown.Item>
              </Link>
              <Link to="/Categorias">
                <NavDropdown.Item>Castrol</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavbarAceites;
