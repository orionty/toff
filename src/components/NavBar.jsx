import React from "react";
import { FaHive, FaUserAlt } from 'react-icons/fa';
import { Container,Navbar,Form} from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
    
    return(
        <div>
      
      
      {/* Navigation Bar */}
      <Navbar collapseOnSelect expand="lg"   variant="dark" className="navBar p-3 d-flex justify-content-between align-items-center">
      <Container fluid >
      <Navbar.Brand   className="navBrand "><FaHive  className="fs-1 p-1 mb-2"/>TOFF</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
    
      </Navbar.Collapse>
      <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
      
      <Form className="d-flex">
      <Link to="/register" className="text-decoration-none text-light" ><p><FaUserAlt className="fs-1 p-1 mb-2"/> Register </p></Link>
      </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
            
        </div>

    );
}


export default NavBar;