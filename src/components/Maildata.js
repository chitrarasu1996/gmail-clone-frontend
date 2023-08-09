import { useContext, useEffect, useState } from "react";
import {  } from "../service/api";
import { getAllMails,deleteMailReq,getContentById } from "../service/api";
import { useNavigate } from "react-router-dom";
import { store } from "../App";
import {RiDeleteBin6Line} from "react-icons/ri"

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
    
        <div className="mt-2">
        {allDataFromMail.length?allDataFromMail.map((mail,i)=>(
            <div  className="MailData" key={i}>
                 
               <div  className="row all-mail-data"  >
          
               <p className="hover-to col-md-6" onClick={()=>perticularContent(mail._id)}>{mail.to}</p>

                 <p  className="hover-sub col-md-4 " onClick={()=>perticularContent(mail._id)} >{mail.sub.substring(0, 25)}</p>
                
                 <p className="col-md-1" onClick={()=>deleteMail(mail._id)} >  <button className="btn btn-danger delete-button rounded " ><RiDeleteBin6Line size={14}/></button>
              </p>
              </div>
            </div>
        )):<div><h1>empty...</h1></div>}
         </div>
     


        </div>

    )
};
export default Maildata;
