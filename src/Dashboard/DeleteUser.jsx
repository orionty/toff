import React, {useState,useEffect} from 'react'
import {auth,logout} from '../config/Fire'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaUserAlt,FaSignOutAlt,FaRegTrashAlt,FaUserPlus } from 'react-icons/fa';
import {Navbar,Container,Button,Dropdown,Nav,NavDropdown} from "react-bootstrap";
import Axios from 'axios';
import AdminFooter from './AdminFooter';

function DeleteUser() {
    
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      
    }, [user, loading,navigate]);


    const[name,setName] = useState(" ");
   

    const deleteUser = () =>{
    Axios.post("http://localhost:3001/user_delete",{
        name: name
    }).then(() => {alert("user deleted successfully") })
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
        <NavDropdown.Item href="new_user" className='dropdown-hover'>Add member</NavDropdown.Item>
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



    <div className="container shadow-lg  mb-5 bg-body rounded flip-card">
    <div class=" container row g-3 needs-validation " novalidate>
          <div class=" col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>Full name</label>
            <input type="text" class=" form-control search-input-control" id="validationTooltip01" placeholder="please enter new user full name"
            name='name'
            onChange = {(e) => {
                setName(e.target.value)
            }}
            />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
          

          
         
          <div class="col-12 mb-5 ">
            <button class="btn  me-5  mb-1"  style={{backgroundColor:"red",color:"white"}} onClick={deleteUser}><FaRegTrashAlt /> Delete User</button>
            <a href="/new_user"><button class="btn  me-5  mb-1" style={{backgroundColor:"green",color:"white"}}  ><FaPlus /> Add User</button></a>
            <a href="/update_user"><button class="btn me-5  mb-1 "  style={{backgroundColor:"orange",color:"white"}}><FaUserPlus /> Update User</button></a>
          </div>
 </div>
    </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br />
<AdminFooter />
    </div>
  )
}

export default DeleteUser