import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/Cartwidget";
import logo from "../logo.png";
import { useContext } from "react";
import { ProductosContext } from "../../context/Context";

function NavbarAceites() {
  const { cantidadEnCarrito } = useContext(ProductosContext);

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
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <Link to="/Marcas/Motul" className="dropdown-item">
                Motul
              </Link>
              <Link to="/Marcas/Total" className="dropdown-item">
                Total
              </Link>
              <Link to="/Marcas/Elaion" className="dropdown-item">
                Elaion
              </Link>
              <Link to="/Marcas/Gulf" className="dropdown-item">
                Gulf
              </Link>
              <Link to="/Marcas/Valvoline" className="dropdown-item">
                Valvoline
              </Link>
              <Link to="/Marcas/Shell" className="dropdown-item">
                Shell
              </Link>
              <Link to="/Marcas/Castrol" className="dropdown-item">
                Castrol
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget itemCount={cantidadEnCarrito} />
    </Navbar>
  );
}
export default NavbarAceites;
