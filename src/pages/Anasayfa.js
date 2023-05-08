import React from "react"
import "./Anasayfa.css";
import SiparisFormu from "./SiparisFormu";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";




const Anasayfa = () => {

    return (

        <div>
            <h1>KOD ACIKTIRIR PİZZA DOYURUR</h1>
            <a href="/siparisOlustur">
            <button className="button" onClick="myFunction()">ACIKTIM</button> 
            </a> 
             <img src="./assets/mvp-banner.png" />  
            
        </div>

    )
};

export default Anasayfa;