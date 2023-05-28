import { useContext, useEffect, useState } from "react";
import {  } from "../service/api";
import { getAllMails,deleteMailReq,getContentById } from "../service/api";
import { useNavigate } from "react-router-dom";
import { store } from "../App";


const Maildata=()=>{

    const {setParticularMailContent}=useContext(store)

const [allDataFromMail,setAllDataFromMail]=useState([])

const navigate=useNavigate();

useEffect(()=>{
    startGettingData()
},[])

const startGettingData=async()=>{
    const allgmailData=  await getAllMails();
    
    setAllDataFromMail(allgmailData.data.mails)
    
}
const deleteMail=async(id)=>{
  const dataMail=  await deleteMailReq(id)
  await startGettingData()
    alert(dataMail.data.message)
    
}

const perticularContent=async (id)=>{
    try{
       const particularContent= await getContentById(id)
       setParticularMailContent(particularContent.data.content)
      navigate("/content")
    }catch(er){
        console.log(er)
        alert(er)
    }
   
    
}
    return(
        <div>
            <div className="mail-tittle mt-2 text-center  mb-2" >
            All Mails
            </div>
        <div >
        {allDataFromMail.length?allDataFromMail.map((mail,i)=>(
            <div  className="MailData all-mail-wrapper d-flex align-items-center justify-content-between" key={i}>
                 
               <div   className="d-flex "  >
          
               <p className="hover me-5" onClick={()=>perticularContent(mail._id)}>To:{mail.to}</p>

                 <p  className="hover" onClick={()=>perticularContent(mail._id)} > <span className='me-1 ms-2 '  >sub:</span>{mail.sub}</p>
                 </div>
                 <p onClick={()=>deleteMail(mail._id)} >  <button className="btn btn-danger me-2 mt-1"  >Delete</button>
              </p>
             
            </div>
        )):<div><h1>empty...</h1></div>}
         </div>
        </div>

    )
};
export default Maildata;
