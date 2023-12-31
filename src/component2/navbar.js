import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


function BasicExample() {
  const counter=useSelector(state=>state.favorites);
  
  return (<>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
              <NavLink to="/" className='nav-link'>HOME</NavLink>
            <NavLink to="/Contact" className='nav-link'>contact</NavLink>
            <NavLink to="/Help" className='nav-link'>help</NavLink>
            <NavLink to="/cart" className='nav-link'>favourite  </NavLink>
            {counter.length}
            <NavLink to="/Card" className='nav-link'>product</NavLink>
        


           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <button type="button" class="btn btn-primary float-end my-3" >data</button>
    </>

  );
}

export default BasicExample;