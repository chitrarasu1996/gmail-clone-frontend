import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import {FormGroup,Label,Input,Form,Button} from "reactstrap"
import { getDetails, loggedDetails,api } from '../service/api';
import { store } from '../App';

const LoginForm=()=> {

const {token,setToken,setProfileName}=useContext(store)

  const navigate=useNavigate();

const [emailDetails,setEmailDetails]=useState("");

const [password,setPassword]=useState("")


const loggeed=async()=>{
  try{
const logged=await loggedDetails(emailDetails,password)

if(logged.data.jwtToken){
 
  await localStorage.setItem("jwtToken",logged.data.jwtToken);
localStorage.setItem("userEmail",logged.data.userEmail)

  setToken(logged.data.jwtToken)
  setProfileName(logged.data.userEmail)
  navigate("/")
}else{

  alert(logged.data.message)
}
  }catch(er){
console.log(er)

  }


}

  return (
   <div>
    <Form className='form-wrapper'>
      <div className='background-wrapper'>
      <h1 className='title'>Login</h1>
    <FormGroup   floating>
    
      <Input
  
        id="exampleEmail"
        className='input-wrap'
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
        className='input-wrap'
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>

    {' '}
    <div className='d-flex gap-3 align-items-center justify-content-center'>
    <Button  color="primary"  onClick={loggeed}>
      Submit
    </Button>
    <Button  color="success"  onClick={()=>navigate("/register")}>
Register Here </Button>
</div>
    </div>
  </Form>
  
   </div>
  )
}
export default LoginForm;
