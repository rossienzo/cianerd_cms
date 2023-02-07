import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Navigation.css";
import Logo from "../../res/imgs/logo-cianerd-branca.png";
import { Link } from 'react-router-dom';
import NavLink from "./NavLink";

const Navigation = (props) => {

  return (
    <Navbar className='navigation' expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" linkName="Home"/>
            <NavLink to="/contact" linkName="Contato"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Navigation;