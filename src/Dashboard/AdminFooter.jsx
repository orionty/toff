import React,{useState} from 'react'
import {FaAngleUp} from 'react-icons/fa'
import {Modal,Button} from 'react-bootstrap'

function AdminFooter() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 

  return (
    <div>
      <br />
      <>
  
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Privacy Policy</Modal.Title>
    </Modal.Header>
    <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minus adipisci! Adipisci mollitia odio accusamus aspernatur asperiores in nam esse saepe, neque dolores deserunt aut eligendi quo id. Sed eos facere natus, cum dolorem tenetur ut! Saepe deserunt enim possimus et. Rem sunt deserunt quae sed aperiam expedita, obcaecati voluptatum voluptate magni consequatur et explicabo. Sequi, eius! Impedit minima reprehenderit recusandae veniam deleniti libero sed quasi aperiam vero at rem pariatur, repudiandae deserunt ducimus eius delectus, sint modi quas placeat esse nesciunt nostrum assumenda blanditiis quia. Nihil quos ipsam nostrum, mollitia rem 
      ipsum adipisci facilis illum vero nesciunt quod autem. </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal>
</>


        <footer className='container-fluid adminFooter d-flex justify-content-around align-items-center '>
        <div>
          <img src="/img/sda-footer-logo.png" alt="sda-footer-logo" />
         <span> TOFF is an office management system for tithe and offering for Seventh-Day Adventist Church.</span>
        </div>
        
        <div>&copy; 2022 copyright || All right reserved.</div>
        <div>
          <a href className='text-decoration-none text-light' style={{cursor:"pointer"}}  onClick={handleShow}>Privacy Policy <FaAngleUp /></a>
        </div>
        </footer>
    </div>
  )
}

export default AdminFooter