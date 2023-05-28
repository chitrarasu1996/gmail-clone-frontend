import React, { useContext, useEffect, useState } from 'react'
import { store } from '../App'
import { getContentById } from '../service/api';
import { Container } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Maildata from './Maildata';



const Showcontent=()=> {


  const navigate=useNavigate()

  let {particularMailContent}=useContext(store)

 

// const getData=async(id)=>{
//  const mailIdData= await getContentById(id)

// }


  return (
  
    <div >
   
{
 
particularMailContent.length?<div className='particular-content'> 
    <p  className='mt-2 text-center text-white content-tittle-container'>Content</p>
        <p  className='specific-content' >{particularMailContent}</p>  
   </div>:<div><h1 className='text-center other-content text-white'>Loading...</h1></div>
}
         
    </div>
 
  )
};
export default Showcontent
