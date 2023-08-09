import React, { useContext, useEffect, useState } from 'react'
import { store } from '../App'
import { getContentById } from '../service/api';
import { Container } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Maildata from './Maildata';



const Showcontent=()=> {


  const navigate=useNavigate()

  let {particularMailContent}=useContext(store)

 



  return (
  
    <div >
   
{
 
particularMailContent.length?<div className='particular-content'> 
    <p  className='mt-2 text-center content-tittle-container text-white'>Content</p>
        <p  className='specific-content' >{particularMailContent}</p>  
   </div>:<div><h1 className='text-center other-content'>Loading...</h1></div>
}
         
    </div>
 
  )
};
export default Showcontent
