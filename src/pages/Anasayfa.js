import React from "react"
import { Button  } from "reactstrap";
import "./Anasayfa.css";



const Anasayfa = () => {

    return (

        <div>
            <h1 className="h1" style={{lineHeight: '5rem', fontSize: 'xxx-large'}}>KOD ACIKTIRIR <br/> PIZZA, DOYURUR</h1>
            
            <a href="/pizza">
                <Button color="warning" style={{borderRadius: '2rem', padding: '0.5rem 3rem'}} id="order-pizza" onClick="myFunction()">ACIKTIM</Button> 
            </a> 

            <img src="./Assets/mvp-banner.png" />  
            
        </div>

    )
};

export default Anasayfa;