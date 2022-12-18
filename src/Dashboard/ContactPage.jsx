import React,{useState,useEffect} from 'react'
import AdminFooter from './AdminFooter'
import {  FaUserAlt,FaSignOutAlt } from 'react-icons/fa';
import {auth,logout} from '../config/Fire'
import { useAuthState } from "react-firebase-hooks/auth";
import {Navbar,Container,Button,Dropdown,Nav,NavDropdown} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';

function ContactPage() {

    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      
    }, [user, loading,navigate]);


    const[firstname,setfirstName] = useState(" ");
    const[lastname,setlastName] = useState(" ");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");

const sendMail = () =>{
    Axios.post("http://localhost:3001/mail",{
        firstname: firstname,
        lastname: lastname,
        email: email,
        message:message
    }).then(() => {alert("sent successfully") })
}



  return (
    <div>

              {/* top navigation bar */}
    <nav className='adminNavBar container-fluid d-flex justify-content-between align-items-center'>
      <div>
    <a class="navbar-brand container" href>
    <img src="../img/toffbrand.svg" alt="toff-icon" width="200" height="100"  className='rounded-3' /> </a>
  </div>
   <div>
   <Dropdown className='me-3 '>
  <Dropdown.Toggle className='user-icon' id="dropdown-basic">
  <FaUserAlt />
   </Dropdown.Toggle>   <Dropdown.Menu>
   <Dropdown.Item className='dropdown-hover'>{user?.email}</Dropdown.Item>
   <Dropdown.Item className='dropdown-hover'>change password</Dropdown.Item>
     <Dropdown.Item className='dropdown-hover' onClick={logout}>logout <FaSignOutAlt /></Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
   </div>
     
    </nav>
{/* down navigation bar */}
<Navbar collapseOnSelect expand="lg" className='admin-down-navbar p-3' variant="dark">
  <Container >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/admin">Home</Nav.Link>

      <NavDropdown title="Church" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/search_church" className='dropdown-hover'>Search</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Link to = '/search_church'> <Button className='search-icon' >Search</Button></Link>
  </Navbar.Collapse>
  </Container>
</Navbar>
<br /><br />

<div class="container contact-container" >
        <section class=" container">

    <div className='container pb-3'>
    <p class="text-center w-responsive mx-auto mb-5 pt-5" style={{color:"navy"}}>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> 
        <hr  />
    </div>
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>First name</label>
            <input type="text" class="form-control" id="validationTooltip01" placeholder="first name"
            name='firstname'
            onChange = {(e) => {
                setfirstName(e.target.value)
            }}
            required />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label" style={{color:"navy"}}>Last name</label>
            <input type="text" class="form-control" id="validationTooltip02" placeholder="last name"
            name='lastname'
            onChange = {(e) => {
                setlastName(e.target.value)
            }}
            required />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>

          <div class="col-md-4 position-relative">
            <label for="validationTooltip03" class="form-label" style={{color:"navy"}}>Email</label>
            <input type="email" class="form-control" id="validationTooltip03" placeholder="example@gmail.com" 
            name='email'
            onChange = {(e) => {
                setEmail(e.target.value)
            }}
            required />
            <div class="invalid-tooltip">
              please provide correct email
            </div>
          </div>
          
          <div class="col-md-6 position-relative">
            <label for="validationTooltip04" class="form-label"  style={{color:"navy"}}>Message</label>
            <textarea class="form-control" id="validationTooltip04" 
            name='message'
            onChange = {(e) => {
                setMessage(e.target.value)
            }}
            required></textarea>
            <div class="invalid-tooltip">
              Please fill this field
            </div>
          </div>
         
          <div class="col-12 mb-5">
            <button class="btn "  style={{backgroundColor:"navy",color:"white"}} onClick={sendMail}>Submit form</button>
          </div>
        </form>

        </section>

</div>
<br /><br /><br />
        <AdminFooter />
    </div>
  )
}

export default ContactPage