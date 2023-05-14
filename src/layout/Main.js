import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Anasayfa from "../pages/Anasayfa";
import SiparisOnay from "../pages/SiparisOnay";
import SiparisFormu from "../pages/SiparisFormu";
import SiparisFormPage from "../pages/SiparisFormPage";


const Main = ({products}) => {

   

 return (
    
    <div className="main-container">
       
      <div className="page-container">
        <Router>
         
             <Route exact path="/" element={<Anasayfa />} />
             <Route path="/anasayfa"><Anasayfa /></Route>
             <Route path="/pizza"><SiparisFormu products={products}/></Route>
             <Route path="/siparisOlustur"><SiparisFormPage products={products}/></Route>
             <Route path="/siparisOnay"><SiparisOnay products={products}/></Route>

     
        </Router>
      </div>

      
    </div>
    


)};




export default Main;