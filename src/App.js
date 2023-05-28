import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import Sendmail from './components/Sendmail';
import Maildata from './components/Maildata';
import { useContext,createContext, useState } from 'react';
import Showcontent from './components/Showcontent';
export const store = createContext();
function App() {

  const[token,setToken]=useState(localStorage.getItem("jwtToken"))
  const [profileName,setProfileName]=useState(localStorage.getItem("userEmail"))
  const [particularMailContent,setParticularMailContent]=useState("")
 


  return (
    <store.Provider value={{token,setToken,setProfileName,profileName,setParticularMailContent,particularMailContent}}> 
    <div className="App">
   
<Routes>
  <Route path='/' element={<Home/>}/>
<Route path='/login' element={<LoginForm/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/sendmail' element={<Sendmail/>}/>
<Route path='/maildata' element={<Maildata/>} />
<Route path='/content' element={<Showcontent/>}/>

</Routes>


     
    </div>
    </store.Provider>
  );
}

export default App;
