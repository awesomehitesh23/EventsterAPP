import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/logo1.png'
 
const Navbars = () =>{
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
 
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md"  >
     
          <Navbar.Brand as={Link} to="/home" style={{marginLeft:'1rem'}}>
          <img src={logo} width={50} style={{marginRight:20}}/>  Crystal Evenster</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto " style={{fontSize:20}}>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/event">Event</Nav.Link>
              <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <Nav className="ms-auto"  style={{fontSize:20,marginRight:'3rem'}} navbar >
              <Nav.Link  onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
   
      </Navbar>
    </>
  );
}
 
export default Navbars;