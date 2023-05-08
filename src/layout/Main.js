import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "../components/Menu";
import Anasayfa from "../pages/Anasayfa";
import SiparisOnay from "../pages/SiparisOnay";
import SiparisFormu from "../pages/SiparisFormu";


const Main = () => {

   

 return (
    
    <div className="main-container">
       <div className="header-container">
     
      
        
      </div>
      <div className="page-container">
        <Router>
         
             <Route exact path="/" element={<Anasayfa />} />
             <Route path="/anasayfa"><Anasayfa /></Route>
             <Route path="/siparisOlustur"><SiparisFormu /></Route>
             <Route path="/siparisOnay"><SiparisOnay /></Route>

     
         </Router>
      </div>

      
        </div>
    


)};




export default Main;