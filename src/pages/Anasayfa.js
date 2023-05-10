import React from "react"
import "./Anasayfa.css";
import SiparisFormu from "./SiparisFormu";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import { Button  } from "reactstrap";




const Anasayfa = () => {

    return (

        <div>
            <h1>KOD ACIKTIRIR PİZZA DOYURUR</h1>
            <a href="/siparisOlustur">
                
            <Button color="warning" style={{borderRadius: '2rem', padding: '0.5rem 3rem'}} className="button" onClick="myFunction()">ACIKTIM</Button> 
            </a> 

             <img src="./assets/mvp-banner.png" />  
            
        </div>

    )
};

export default Anasayfa;