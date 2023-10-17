import axios from 'axios'



export const api=`https://gmail-clone-os5x.onrender.com/`


export const getDetails=async()=>{
    const data=await axios.get(api)
    return data;
}

export const RegisterData=async(email,password)=>{
    const registerDetails=await axios.post(api+"email/register",{email,password})
 return(registerDetails.data.message)
};

export const loggedDetails=async(email,password)=>{
const loginData=await axios.post(api+"email/login",{email,password})
return loginData
};

export const getAllMails=async()=>{
   const allMail= await axios.get(api+"email/allmail")
 return allMail
};
export  const sendMailto=async(to,sub,content,token)=>{

const sendingMail=await axios.post(api+"email/send-email",
{to,sub,content},
{headers:{
    jwtToken:token
}}

)

return sendingMail
}

export const deleteMailReq=async(id)=>{
const deletemail=await axios.delete(api+"email/deletemail/"+`${id}`)
return deletemail


};

export const getContentById=async(id)=>{

    const emailContent=await axios.get(api+"email/findemail/"+`${id}`)
    return emailContent

}