import React,{ useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {auth, logInWithEmailAndPassword} from '../config/Fire';
import { useAuthState } from "react-firebase-hooks/auth";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) 
    {navigate("/admin");}

  }, [user, loading,navigate]);


return (
  <div>
 <Card>
 <Card.Img src="/img/giving.jpg" className="form-image-bg" alt="giving-image" />
 <Card.ImgOverlay className="linearBg"></Card.ImgOverlay>
 <Card.ImgOverlay className=" login-form-overlay ">
 <div class="loginFormWidth position-absolute top-50 start-50 translate-middle g-3 needs-validation " novalidate>
      <p className='text-center btnBorder'>Please sign in to use TOFF</p>
       
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
        
        <div class="col ">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}

          />
      </div>
      <div class="form-check form-switch mt-2">
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
<label class="form-check-label" for="flexSwitchCheckDefault">Remember me</label>
</div>
        <div class="col-12 mt-2">
          
          <button class="btn login-btn"  onClick={() => logInWithEmailAndPassword(email, password)}>SIGN IN</button>
         
        </div>
        <Link to="/reset" className="text-decoration-none text-light"><p className='text-center mt-2' style={{cursor:"pointer"}} >Forgot Password ?</p></Link>
      </div>
 </Card.ImgOverlay>

 </Card>

  </div>
);
}

export default Form