import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
 import {BsSearch} from "react-icons/bs"
import Sidebar from './Sidebar';
import Maildata from './Maildata';
import { store } from '../App';
 function Home() {

  const navigate=useNavigate();
  const {token,setToken,profileName}=useContext(store)
 


 
useEffect(() => {

  if (token==null&&profileName==null) {
    navigate("/login")
    }
},[token]);

const sendMailto=()=>{
 
  navigate("/sendmail")
  
};


const loggedOut=async()=>{

  await navigate("/login")
  localStorage.removeItem("jwtToken")
  localStorage.removeItem("userEmail")
  alert("Logout Successfully")

}
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light  " >
    <div className=" ms-1   me-2 ">
  <div  className=" " >
 <span onClick={sendMailto} className='d-flex align-items-center gap-2  ms-2 compose-wrapper'> <img style={{width:"100%",height:"20px"}}  src='https://img.icons8.com/?size=512&id=KahvNOlflKfj&format=png'>
  </img>Compose </span> 
  </div >
 
</div>

  <a className="navbar-brand d-flex" href="#"> 
  <img style={{width:"30px"}} src="https://img.icons8.com/?size=2x&id=P7UIlhbpWzZm&format=png"></img> 
  <span className='ms-1 gmail-tittle'> Gmail</span>
  
  </a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
  <div className='d-flex gap-2'>
      <form className="form-inline my-2 my-lg-0 d-flex searchwrapper">
       
      <button className="btn btn-outline-none my-2 my-sm-0" type="submit" ><img  style={{width:"20px",opacity:"0.8"}} src='https://img.icons8.com/?size=512&id=7695&format=png'></img></button>
      <input className="form-control mr-sm-2  inputwrapper" style={{borderRadius:"20px",background:"#EAF1FB"}} type="search" placeholder="Search mail" aria-label="Search" />
    
    </form>

    <div className="dropdown profile-wrapper  ">
  <button className="btn btn-tranperant  me-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 {/* <span className='me-1' style={{fontWeight:"200",fontSize:"20px"}} ></span> */}
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="violet" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item " style={{fontSize:"15px",fontWeight:"normal"}} href="#">{profileName}</a></li>
    <li><a className="dropdown-item" href="#" onClick={loggedOut}>signout</a></li>
  
  </ul>
</div>

</div>

    
    </ul>
  
  </div>
</nav>
<div className='row '>
<div className='left-sidebar col-md-3 '>
<Sidebar />
</div>

<div className='maincomponent col-md-9 ' style={{borderRadius:"10px"}}>
<Maildata/>
</div>
</div>

      </div>
      
  )
}
export default Home
