import React,{useEffect, useState} from 'react'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {auth,sendPasswordReset} from '../config/Fire';
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/admin");
  }, [user, loading,navigate]);


  return (
    <div>
          <NavBar />
   <Card>
   <Card.Img src="/img/giving.jpg" className="form-image-bg" alt="giving-image" />
   <Card.ImgOverlay className="linearBg"></Card.ImgOverlay>
   <Card.ImgOverlay className=" login-form-overlay ">
   <div class="loginFormWidth position-absolute top-50 start-50 translate-middle g-3 needs-validation " novalidate>
        <p className='text-center btnBorder'>Forgot Password</p>
        
          <div class="col ">
            <label for="validationTooltip02" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationTooltip02" placeholder="example@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
            <div class="invalid-tooltip">
              please provide correct email
            </div>
          </div>
          
        
        <div class="form-check form-switch mt-2">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Remember me</label>
</div>
          <div class="col-12 mt-2">
            <button class="btn login-btn" onClick={() => sendPasswordReset(email)}>RESET</button>
          </div>
         <Link to ="/" className="text-decoration-none text-light"><p className='text-center mt-2' style={{cursor:"pointer"}}><FaArrowLeft /> Sign In</p></Link>
        </div>
   </Card.ImgOverlay>

   </Card>
    <Footer />

    </div>
  )
}

export default ForgotPassword