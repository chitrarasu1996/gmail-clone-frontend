import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import {FormGroup,Label,Form,Button,Input} from "reactstrap"
import { sendMailto } from '../service/api';
import { store } from '../App';
function Sendmail() {
  const [to,setTo]=useState("");
  const [subject,setSubject]=useState("");
  const [content,setContent]=useState("")
  const {token} =useContext(store)
 

const navigate=useNavigate();


    const mailSend=async()=>{
      console.log(to,subject,content,"from")
      if(to.length<2||subject.length<2||content.length<2 ){
alert("enter valid Details")
return
 }
  const sendData= await sendMailto(to,subject,content,token)

  if(sendData.data.content){
    alert("Mail was sent successfully")
    navigate("/")
  }else{
    alert(sendData.data.message)
  }
  

}
    return (
      <div className='hole-sendmail-form'>
        
        <Form className='sendmail-form'>
     
         <div className='send-form'>  
      
         <div  className='new-mesg'> 
          <p className=' pt-2 pb-2 ps-3 p2-4'>New Message</p>
          </div> 
  <FormGroup className='form-group'>
    <Label
      for="exampleEmail"
      hidden
    >
      Email
    </Label>

    <Input
      id="exampleEmail"
      name="email"
     className='border-wrapper'
      placeholder="To"
      type="email" 
      style={{width:"400px"}}
      onChange={(e)=>setTo(e.target.value)}
      value={to}
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
   
    </Label>
    <Input
   className='border-wrapper'
      id="examplePassword"
      name="password"
      placeholder="Subject"
      type="text"
      style={{width:"400px"}}
      onChange={(e)=>setSubject(e.target.value)}
      value={subject}
    />
    <div  className='mt-2'>
     <textarea 
      id="examplePassword"
      name="content"
      placeholder="content"
      type="text"
      className="compose-input" 
      style={{width:"400px", maxHeight:"250px",outline
    :"none"}
      }
      onChange={(e)=>setContent(e.target.value)}
  value={content}

    />
 
      </div>
  </FormGroup>
  {' '}
  <Button color='success'  className="mb-2"onClick={mailSend}>
    Send
  </Button>
  </div>
</Form>
</div>
    )
}
export default Sendmail;