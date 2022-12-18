import React, {useState, useEffect} from 'react'
import {auth,logout} from '../config/Fire'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus,FaArrowRight, FaUserAlt,FaSignOutAlt,FaRegTrashAlt,FaUserPlus,FaRegCommentDots } from 'react-icons/fa';
import {Navbar,Container,Button,Dropdown,Nav,NavDropdown} from "react-bootstrap";
import Axios from 'axios';
import AdminFooter from '../Dashboard/AdminFooter';


function AfranchoOfferingPage() {
    
    const churchDetails = {
        pastorName: "Eric Frimpong",
        district: "Breman",
        church: "Afrancho-Bronkong"
      }

    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      
    }, [user, loading,navigate]);

    const[name,setName] = useState(" ");
    const[week,setWeek] = useState("");
    const[amount,setAmount] =useState("");
    const[referenceNumber,setReferenceNumber] = useState("");
    const[userId,setUserID] = useState("");

    const sendUpdate = () =>{
    Axios.post("http://localhost:3001/offering/user_update",{
        name: name,
        week: week,
        amount: amount,
        referenceNumber: referenceNumber,
        userId: userId
    }).then(() => {alert("user update successfully") })
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
      
      <NavDropdown title="Member" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/search" className='dropdown-hover'>Search member</NavDropdown.Item>
        <NavDropdown.Item href="/new_user" className='dropdown-hover'>Add member</NavDropdown.Item>
        <NavDropdown.Item href="/update_user" className='dropdown-hover'>Update member</NavDropdown.Item>
       
      </NavDropdown>
      <NavDropdown title="Church" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/search_church" className='dropdown-hover'>Search</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Link to = '/search_church'> <Button className='search-icon'>Search </Button></Link>
  </Navbar.Collapse>
  </Container>
</Navbar>
<br />
<br />
    
    <div className="container shadow-lg p-2 mb-5 bg-body rounded d-flex justify-content-around align-items-center" style={{color:"navy" }}>
      <h3 className='fs-6 fw-bold ' >Church: {churchDetails.church} </h3>
      <h3 className='fs-6 fw-bold '  >District: {churchDetails.district} </h3>
      <h3 className='fs-6 fw-bold ' >Pastor: {churchDetails.pastorName} </h3>
    </div>

    <div className='container'>
    <h3 className='container fw-bold text-uppercase ' style={{color:"navy" }}>Offering </h3>
    <hr />
    </div>
    <br />
   
    <div className="container shadow-lg  mb-5 bg-body rounded ">
    <div class=" container-fluid row g-3 needs-validation offering-background" novalidate>
          <div class=" col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>Full name</label>
            <input type="text" class=" form-control " id="validationTooltip01" placeholder="please enter new user full name" 
            name='name' required 
            onChange = {(e) => {
                setName(e.target.value)
            }}
            />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
             
          <div class=" col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>Week No.</label>
            <input type="text" class=" form-control " id="validationTooltip01" placeholder="week number" 
             onChange = {(e) => {
                setWeek(e.target.value)
            }}
            name='week' required />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          

           <div class=" col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>Amount</label>
            <input type="text" class=" form-control " id="validationTooltip01" placeholder="amount" 
             onChange = {(e) => {
                setAmount(e.target.value)
            }}
            name='amount' required />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>

          <div class=" col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>Reference No.</label>
            <input type="text" class=" form-control " id="validationTooltip01" placeholder="reference number"
             onChange = {(e) => {
                setReferenceNumber(e.target.value)
            }}
            name='referenceNumber' required />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>

          <div class=" col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>User ID</label>
            <input type="text" class=" form-control " id="validationTooltip01" placeholder="enter user Id "
             onChange = {(e) => {
                setUserID(e.target.value)
            }}
            name='userId' required />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
         
          <div class="col-12 mb-5 ">
            <a href="/update_user"><button class="btn me-5 mb-1  "  style={{backgroundColor:"orange",color:"white"}} onClick={sendUpdate} ><FaUserPlus /> Update User</button></a>
           <a href="/message"> <button class="btn me-5 mb-1  " type="submit" style={{backgroundColor:"navy",color:"white"}}><FaRegCommentDots /> Send Message</button></a>
            <a href="/new_user"><button class="btn  me-5  mb-1" type="submit" style={{backgroundColor:"green",color:"white"}}><FaPlus /> Add User</button></a>
            <button class="btn  me-5  mb-1" type="submit" style={{backgroundColor:"red",color:"white"}}><FaRegTrashAlt /> Delete User</button>
            <a href="/update_user" className='text-decoration-none fw-bold float-end'>Tithe <FaArrowRight /></a>
          </div>
 </div>
    </div>

           <AdminFooter />

    </div>
  )
}

export default AfranchoOfferingPage