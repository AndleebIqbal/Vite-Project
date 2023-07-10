import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link href="#home">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/aboutus">AboutUs</Link>
            <Link className='nav-link' to="/product">Product</Link>
            <Link className='ms-4 btn btn-dark' to="/signup">Signup</Link>
          </Nav>
        
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;