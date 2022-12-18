import React,{ useState, useEffect } from 'react'
import {  FaUserAlt,FaCaretRight } from 'react-icons/fa';
import {auth,logout} from '../config/Fire'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {Navbar,Container,Dropdown,Nav,NavDropdown} from "react-bootstrap";
function Display() {

    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
  
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      
    }, [user, loading,navigate]);

  
    const [category, setCategory] = useState([]);

    useEffect(() => {
      const getcategory = async () => {
        const res = await fetch("http://localhost:3001/result");
        const getdata = await res.json();
        setCategory(getdata);
        console.log(getdata);
      };
  
      getcategory();
    },[]);
    
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(category);

    
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = category.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(category);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div>
         <div >
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
     <Dropdown.Item className='dropdown-hover' onClick={logout}>logout <FaCaretRight /></Dropdown.Item>
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
        <NavDropdown.Item href="/display" className='dropdown-hover'>Search member</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1" className='dropdown-hover'>Add member</NavDropdown.Item>
       
      </NavDropdown>
      <NavDropdown title="Church" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Search</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

  </Navbar.Collapse>
  </Container>
</Navbar>
<br />
 
     </div>
      

     <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id me-2">{user.id}</span>
              <span className="user-name">{user.name}</span>
            
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>

               
    </div>
  )
}

export default Display
