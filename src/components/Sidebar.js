import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllMails } from '../service/api'; 
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const navigate=useNavigate();


  return (
    <div>
    <div className='sidebar' >
      <div  >
       <p ><img style={{width:"20px",outline:"none"}} className=' me-2  ' src='https://img.icons8.com/?size=512&id=91Urefaadcsp&format=png' alt='img'></img> <Link className=' text-decoration-none tittles text-dark'to={"/"} >  Inbox</Link> </p>
     <p><img style={{width:"20px"}} className='me-2' src='https://img.icons8.com/?size=512&id=RHtRRB1E4DKI&format=png' alt='img'></img> <Link to={"/"}  className='tittles  text-decoration-none text-dark'>Sent</Link> </p> 
     </div>
</div> 


</div>
  )
}
