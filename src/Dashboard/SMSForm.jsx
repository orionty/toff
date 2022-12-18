import React from "react";
import {FaRegCommentDots,FaArrowLeft} from 'react-icons/fa'
import AdminFooter from "./AdminFooter";

class SMSForm extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }


  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('http://localhost:3001/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }




    render(){

        return(
            <div>

    <div className="container-fluid mb-3 mt-4">
         <a href="update_user"><button className="btn" style={{color:"white",backgroundColor:"navy"}}><FaArrowLeft /> Back</button></a>
    </div>

<div className="container">
<br /><br />
<form  onSubmit={this.onSubmit}
         className='container  needs-validation'>
    <div class=" col-md-5 ">
            <label for="validationTooltip01" class="form-label" style={{color:"navy"}}>To:</label>
            <input type="tel" class=" form-control " id="validationTooltip01" placeholder="+233541565234" 
            name='to' required 
            value={this.state.message.to}
            onChange={this.onHandleChange}
            />
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>

          <div class="col-md-5 ">
            <label for="validationTooltip04" class="form-label"  style={{color:"navy"}}>Message</label>
            <textarea class="form-control" id="validationTooltip04" 
            name='body'
            value={this.state.message.body}
            onChange={this.onHandleChange}
            required></textarea>
            <div class="invalid-tooltip">
              Please fill this field
            </div>
          </div>
          <button  type="submit" class="btn mt-2  " style={{backgroundColor:"navy",color:"white"}} disabled={this.state.submitting}  ><FaRegCommentDots /> Send Message</button>



    </form>
          <br />
         <a href="/send_mail"> <h5 className="container mb-3" style={{color:"navy"}}>Or send message by email</h5></a>
         

</div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />      
          <AdminFooter />
            </div>

        )
    }

}

export default SMSForm