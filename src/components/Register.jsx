import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import Footer from './Footer'
import NavBar from './NavBar'
import Axios from 'axios'

function Register() {

  const[email,setEmail] = useState(" ");
  const[password,setPassword] = useState(" ");
  const[repeatpassword,setRepeatPassword] = useState(" ");
   

  const sendReset = () =>{
  Axios.post("http://localhost:3001/reset",{
      email: email,
      password: password,
      repeatpassword: repeatpassword
  }).then(() => {alert("Register successfully") })
}


  return (
    <div>
        <NavBar />
   <Card>
   <Card.Img src="/img/giving.jpg" className="form-image-bg" alt="giving-image" />
   <Card.ImgOverlay className="linearBg"></Card.ImgOverlay>
   <Card.ImgOverlay className=" login-form-overlay ">
   <form class="loginFormWidth position-absolute top-50 start-50 translate-middle g-3 needs-validation " novalidate>
        <p className='text-center btnBorder'>Please register to use TOFF</p>
         

          <div class="col ">
            <label for="validationTooltip02" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationTooltip02" placeholder="example@gmail.com" 
            name='email'
            onChange = {(e) => {
              setEmail(e.target.value)
          }}
            required />
            <div class="invalid-tooltip">
              please provide correct email
            </div>
          </div>
          
          <div class="col ">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" 
            name='password'
            required
            onChange = {(e) => {
              setPassword(e.target.value)
          }}
            />
        </div>

          <div class="col ">
            <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"  
            name='repeatpassword'
            onChange = {(e) => {
              setRepeatPassword(e.target.value)
          }}
            required
            />
        </div>
        <div class="form-check form-switch mt-2">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Remember me</label>
</div>
          <div class="col-12 mt-2">
            <button class="btn login-btn" type="submit" onClick={sendReset}>REGISTER</button>
          </div>
         <Link to ="/" className="text-decoration-none text-light"><p className='text-center mt-2' style={{cursor:"pointer"}}><FaArrowLeft /> Sign In</p></Link>
        </form>
   </Card.ImgOverlay>

   </Card>
    <Footer />
    </div>
  )
}

export default Register