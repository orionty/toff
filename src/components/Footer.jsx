import React from 'react';
import {FaWhatsapp,FaFacebook,FaTwitter,FaPhoneSquare} from 'react-icons/fa';


function Footer() {
  return (
    <section class="customFooter" >

  <div class="container text-center text-md-left ">
    <div class="row text-light" >
        <div class="col-md-4 mx-auto">
        <h5 class=" text-uppercase mt-3 mb-4 fw-bold footerBrand">TITHE AND OFFERING</h5>
            <p className='container-fluid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis voluptates quo, doloremque at saepe.</p>
        </div>
      
        
      </div>
      </div>
    
      <hr />
      <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1 text-light">Register for free</h5>
        </li>
        <li class="list-inline-item">
        <a href ="/register" class="text-decoration-none text-light btn btn-danger  btn-rounded" >Sign Up</a>
        </li>
      </ul>
      <hr />
    
      <ul class="list-unstyled list-inline text-center fs-1 " >
        <li class="list-inline-item p-4">
          <a class="text-decoration-none text-light"  href ="https://www.facebook.com " target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </li>
        <li class="list-inline-item p-4">
       <a class="text-decoration-none text-light"  href ="https://www.twitter.com " target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </li>
        <li class="list-inline-item p-4">
        <a class="text-decoration-none text-light"  href ="https://www.whatsapp.com " target="_blank"  rel="noopener noreferrer"><FaWhatsapp /></a>
        </li>
        
        <li class="list-inline-item p-4">
        <a class="text-decoration-none text-light" href ="https://www.instagram.com " target="_blank" rel="noopener noreferrer"><FaPhoneSquare /></a>
        </li>
      </ul>
      <div class="footer-copyright text-center text-light py-3">© 2022 copyright || All right reserved.
      </div>
    
</section>
  )
}

export default Footer
