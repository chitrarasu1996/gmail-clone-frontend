import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
 import {BsSearch} from "react-icons/bs"
import Sidebar from './Sidebar';
import Maildata from './Maildata';
import { store } from '../App';
import {CgProfile} from "react-icons/cg"
import{AiOutlineSearch} from "react-icons/ai"
 function Home() {

  const navigate=useNavigate();
  const {token,setToken,profileName}=useContext(store)
 


 
useEffect(() => {
console.log(token)
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
  </img >Compose </span> 
  </div >
 
</div>

  <a className="navbar-brand d-flex" href="#"> 
  <img style={{width:"30px"}} src="https://img.icons8.com/?size=2x&id=P7UIlhbpWzZm&format=png"></img> 
  <span className='ms-1 gmail-tittle'> Gmail</span>
  
  </a>
  <div className='header-wrap'>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
  <div className='header-wrap ms-4'>
    <div className='form-container-wrap'>
      <form className="form-inline my-2 my-lg-0 d-flex searchwrapper">
       
      <button className="search-button btn 
      btn-outline-none my-2 my-sm-0 bg-transparent rounded-lg" type="submit" >
        
      <AiOutlineSearch size={25}/>
      </button>
      <input className="form-control  
       inputwrapper" type="search" placeholder="Search mail" aria-label="Search" />
    
    </form>
    </div>

    <div className="dropdown  profile-wrapper">
  <button className="btn btn-tranperant  bg-transparent me-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false">
<CgProfile size={20}/>

  </button>
  <ul className="dropdown-menu dropdown-wrapper">
    <li><a className="dropdown-item" style={{fontSize:"15px",fontWeight:"normal"}} href="#">{profileName}</a></li>
    <li><a className="dropdown-item" href="#" onClick={loggedOut}>signout</a></li>
  
  </ul>
</div>

</div>
  
    </ul>
  
  </div>
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
