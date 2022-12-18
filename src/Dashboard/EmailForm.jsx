import React,{useState} from 'react'
import Axios from 'axios';
import {FaRegCommentDots,FaArrowLeft} from 'react-icons/fa'
import AdminFooter from './AdminFooter';


function EmailForm() {

    
    const[email,setEmail] = useState(" ");
    const[message,setMessage] = useState("");
    

    const sendEmailMessage = () =>{
    Axios.post("http://localhost:3001/send/mail",{
        email: email,
        message: message
        
    }).then(() => {alert("message sent successfully") })
}
  return (
    <div>
        <div className="container-fluid mb-5 mt-4">
         <a href="update_user"><button className="btn" style={{color:"white",backgroundColor:"navy"}}><FaArrowLeft /> Back</button></a>
    </div>
<div className="container">

<div class=" col-md-5 ">
     <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>To:</label>
     <input type="email" class=" form-control " id="validationTooltip01" placeholder="example@gmail.com" 
     name='email' required 
     onChange = {(e) => {
        setEmail(e.target.value)
    }}
     />
     <div class="valid-tooltip">
       Looks good!
     </div>
   </div>


   <div class="col-md-5 ">
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
   <button  type="submit" class="btn mt-5  " style={{backgroundColor:"navy",color:"white"}} onClick={sendEmailMessage}   ><FaRegCommentDots /> Send </button>



 </div> 
 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <AdminFooter />
    </div>
  )
}

export default EmailForm