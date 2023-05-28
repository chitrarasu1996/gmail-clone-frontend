import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FormGroup,Label,Input,Form,Button} from "reactstrap"
import { RegisterData } from '../service/api';


const Register=()=> {
const navigate=useNavigate();

const [emailDetails,setEmailDetails]=useState("");

const [password,setPassword]=useState("")


  const submitted=async()=>{

if(emailDetails.length>2&&password.length>2){

  const regiterDetails= await RegisterData(emailDetails,password);
alert(regiterDetails)

navigate("/login")

  return
}else{
  alert("Input valid Details")
}


  }
  return (
   <div>
    <Form className='form-wrapper'>
      <div className='background-wrapper'>
      <h1 className='title'>Register Details</h1>
    <FormGroup floating>
    
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        onChange={(e)=>setEmailDetails(e.target.value)}
        value={emailDetails}
      />
      <Label for="exampleEmail" >
        Email
      </Label>
    
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
   onChange={(e)=>setPassword(e.target.value)}
      value={password}

      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>

    {' '}
    <Button  color="primary" onClick={submitted}>
      Submit
    </Button>
   
    </div>
  </Form>
  
   </div>
  )
}
export default Register;
