import React, {useState,useEffect} from 'react'
import {auth,logout} from '../config/Fire'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaUserAlt,FaSignOutAlt } from 'react-icons/fa';
import {Navbar,Container,Button,Dropdown,Nav,NavDropdown} from "react-bootstrap";
import AdminFooter from './AdminFooter';
function SearchBar() {
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
    <Button className='search-icon'>Search </Button>
  </Navbar.Collapse>
  </Container>
</Navbar>

<br />
<br />
    <div className="container  search-bar shadow-lg  mb-5 bg-body rounded ">
    <a href="/new_user"><Button className='mt-4 ms-2 btn-success'><FaPlus /> New User </Button>   </a>
    <hr />
    <input class="container form-control search-input-control " type="search" 
    value={name}
    onChange={filter}
    placeholder="Search member..." />
    <hr />

    <div className="container  " >

    <table  >
  <tr>
    <th>User ID</th>
    <th>Name</th>
    
  </tr>     


  {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td> <a href="/update_user" className='text-decoration-none text-dark'>{user.name}</a> </td>
            </tr>
           
          ))
        ) : (
          <h1>No results found!</h1>
        )}
  
       
        </table>
      </div>
    </div>

  <AdminFooter />

    </div>
  )
}

export default SearchBar