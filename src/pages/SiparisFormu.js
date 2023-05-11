import React from "react"
import { Button, Input } from "reactstrap"
import { useState, useEffect } from "react"
import {  Link, NavLink, activeNavLink } from "react-router-dom"

import "./SiparisFormu.css"


const SiparisFormu = () => {

  const [product, setProduct] = useState({
    isim: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    özel: "",
});
  
  const [sayac, setSayac] = useState(0);
  
  
  useEffect(() => {

  }, [sayac])

    return (

    <div className="product-container">
    <form>
        <formGroup>
            <div className="header">
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: "small"}}  to="/anasayfa" > Anasayfa - </Link>
            
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: "small"}}  to="/siparisOlustur" > Seçenekler - </Link>

            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: "small" }}  to="/siparisOlustur" > Sipariş Oluştur </Link>
             </div>
            
                <h2 className="product-title">Position Absolute Acı Pizza</h2>

                <div id="product-description">
                    
                    <p className="product-price">85.50₺</p>
                    <p className="product-score">4.9</p>
                    <p className="product-comments">(200)</p>
                    
                </div>
            <div class = "content-row">  
            <p className="content-text">Pizza,domates, peynir ve genellikle  çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olark odun ateşinde  bir fırında yüksek sıcaklıkta pişirilen lezzetli bir pizza.</p>
            </div>
        </formGroup> 
        
        <formGroup id="pizza-form">
        <div className="container">
          <div id="container-section">
            <div className="form">
            <h4> Boyut Seç * </h4> 
             
            <label htmlFor="pizza-form">
                <input id="pizza-form" type="radio" value="Küçük"/>
                    Küçük
            </label>

            <label htmlFor="pizza-form">
                    <input id="pizza-form" type="radio" value="Orta"/>
                        Orta
            </label>
            
            <label htmlFor="pizza-form">
                    <input id="pizza-form" type="radio" value="Büyük"/>
                        Büyük
            </label>
            </div>   
                   
            <label htmlFor="size"> 
                    <h4> Hamur Seç * </h4> 
                        <select id="size-dropdown" name="size">Hamur Kalınlığı
                            <option value="hamur kalınlığı">Hamur Kalınlığı</option>
                            <option value="thin">Thin</option>
                            <option value="medium">Medium</option>
                            <option value="thick">Thick</option>
                        </select>
                        
            </label> 
            </div>
            
        </div>
          
        </formGroup>  



        <formGroup>

             <div id="extra-orders"> 
                <h4 style={{ marginRight: '14.5rem'}}>Ek Malzemeler</h4>
                    <p style={{fontSize: 'medium', marginRight: '11rem'}}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div id="lezzetler">
                    
                    <label className="checbox-style">
                    <input type="checkbox" />  Pepperoni
                     </label>
                    
                    
                    <label className="checbox-style">
                    <input type="checkbox"/>  Sosis
                      </label>
                   
                    <label className="checbox-style">
                    <input type="checkbox" />  Kanada Jambonu
                     </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" />  Tavuk Izgara
                     </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" />  Soğan
                     </label>
                    
                    
                    <label className="checbox-style">
                    <input type="checkbox" />  Mısır
                     </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" />  Domates
                    </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" />  Sucuk
                    </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" /> Jalepeno
                    </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" /> Sarımsak
                     </label>
                   
                    <label className="checbox-style">
                    <input type="checkbox" /> Biber
                    </label>
                    
                    </div>
            </div>
                

    </formGroup>

  <div>
    <label style={{marginRight: '29rem'}} htmlFor="special-text" className="a">Sipariş Notu </label>
    <Input id="special-text" value="Siparişine eklemek istediğin bir not var mı?" style={{width: '40%',
    height: '50%', marginLeft: '27rem'}}/>
    
  </div>
  <hr/>
    <div className="wrapper" style={{marginRight:'27rem'}}>
  <Button
          className="btn-1"
          color="warning"
          size="lg"
          onClick={() => {
            setSayac(sayac - 1);
          }}
        >
          -
        </Button>    
  <input type="text" className="counter" value="1"/>

        <Button
    
          className="btn-1"
          color="warning"
          size="lg"
          onClick={() => {
            setSayac(sayac + 1);
          }}
        >
          +
        </Button>    
       </div>            
                   
                    
    

    <div id="cart-price" style={{marginRight: '10rem'}}>
        <div className="card-text">
        <h6 style={{marginBottom: '1rem', marginTop: '2rem'}}>
            Sipariş Toplamı
        </h6> 

        <p> Seçimler
            <span className="price"> 25.00₺</span> 
        </p>
        <p style={{color: '#CE2829'}}> Toplam
            <span className="total"> 110.50₺</span> 
        </p>
        <Button   className="order-button" color="warning">SİPARİŞ VER</Button>

      
       
    </div>
    </div>
  
    
</form>
  

     </div>             

            
        )
    }

export default SiparisFormu;




    