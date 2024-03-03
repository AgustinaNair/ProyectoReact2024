import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand><NavLink to="/"><Logo/></NavLink></Navbar.Brand>
            <Nav className="me-auto ">                    
                <NavLink className={"navLink"} to="/">TECNO MC</NavLink>
                <NavLink className={"navLink"} to="/category/celulares">Celulares</NavLink>
                <NavLink className={"navLink"} to="/category/tablets">Tablets</NavLink>
                <NavLink className={"navLink"} to="/category/notebooks">Notebooks</NavLink>
            </Nav>
            <div>
                <Link to={"/cart"} ><CartWidget /></Link>
            </div>
        </Container>
    </Navbar>
  )
}

export default NavBar