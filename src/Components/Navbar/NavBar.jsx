import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
            <Nav className="me-auto ">                    
                <Nav.Link href="#home">TECNO MC</Nav.Link>
                <Nav.Link href="#features">Celulares</Nav.Link>
                <Nav.Link href="#pricing">Tablets</Nav.Link>
                <Nav.Link href="#pricing">Notebooks</Nav.Link>
            </Nav>
            <div>
            <Nav.Link href="#pricing"> <CartWidget /> </Nav.Link>
            </div>
        </Container>
    </Navbar>
  )
}

export default NavBar