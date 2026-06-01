import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./EstiloNav.css";
import icono from "./softtech.jpeg";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md">
      {" "}
      <Container>
        {" "}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
        <Link to={"/"} class="navbar-brand">
          {" "}
          <img
            class="logoTienda"
            src={icono}
            alt="Logo de la Tienda"
          ></img>{" "}
        </Link>{" "}
        <Navbar.Collapse id="responsive-navbar-nav">
          {" "}
          <Nav>
            {" "}
            <Link class="nav-link" to={"/"}>
              {" "}
              Inicio{" "}
            </Link>{" "}
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              {" "}
              <Link to="/Escaners" class="dropdown-item">
                {" "}
                Escaners{" "}
              </Link>{" "}
              <Link to="/Portatiles" class="dropdown-item">
                {" "}
                Portatiles{" "}
              </Link>
              <Link to={"/Pcescritorio"} class="dropdown-item">
                {" "}
                Pc de Escritorio{" "}
              </Link>{" "}
              <Link to={"/Impresoras"} class="dropdown-item">
                {" "}
                Impresoras{" "}
              </Link>{" "}
            </NavDropdown>{" "}
            <Link class="nav-link" to={"/preguntas"}>
              {" "}
              Preguntas{" "}
            </Link>{" "}
            <Link class="nav-link" to={"/contactos"}>
              {" "}
              Contactanos{" "}
            </Link>{" "}
          </Nav>{" "}
        </Navbar.Collapse>{" "}
      </Container>{" "}
    </Navbar>
  );
};
export default NavBar;
