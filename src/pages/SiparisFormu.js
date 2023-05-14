import React from "react"
import { Button, Input, Form, FormGroup } from "reactstrap"
import { useState, useEffect } from "react"
import {  Link } from "react-router-dom"
import "./SiparisFormu.css"


const SiparisFormu = () => {

 
  
  const [count, setCount] = useState(0);
  
  const increaseCountHandler = () => {
    setCount(function(count) {
      return count + 1
    })
  }
 
  const decreaseCountHandler = () => {
    setCount(function(count) {
      return count - 1
    })
  }
 useEffect(() => {
  
   }, [count])

  
  
    return (

    <div className="product-container">
    <Form>
        <FormGroup>
            <div className="header" >
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: "small"}}  to="/anasayfa" > Anasayfa - </Link>
            
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: "small"}}  to="/siparisOlustur" > Seçenekler - </Link>

            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: "small"}}  to="/siparisOlustur" > Sipariş Oluştur </Link>
             </div>
            
                <h2 className="product-title">Position Absolute Acı Pizza</h2>

                <div id="product-description">
                    
                    <p className="product-price">85.50₺</p>
                    <p className="product-score">4.9</p>
                    <p className="product-comments">(200)</p>
                    
                </div>
            <div class = "content-row">  
            <p className="content-text">Pizza,domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen lezzetli bir pizza.</p>
            </div>
        </FormGroup> 
        
        <FormGroup id="pizza-form">
      <div className="container">
          <div id="container-section">
            <div className="form">
                <h4 style={{ marginLeft: '2.5rem'}}> Boyut Seç <span style={{color: '#CE2829'}}> * </span> </h4> 
             
                <label htmlFor="pizza-form" style={{marginLeft: ''}}>
                <input id="pizza-form" type="radio" name="buttn" value="Küçük" />
                    Küçük
                </label>

                <label htmlFor="pizza-form">
                <input id="pizza-form" type="radio" name="buttn" value="Orta" style={{ marginLeft: '-0.9rem' }}/>
                    Orta
                </label>
            
                <label htmlFor="pizza-form">
                <input id="pizza-form" type="radio"  name="buttn"  value="Büyük"/>
                    Büyük
                </label>
      </div>   

            <div className="size-content">    
                <label htmlFor="size"> 
                    <h4 style={{ marginTop: '4em'}}> Hamur Seç <span style={{color: '#CE2829'}}> * </span> </h4> 
                        <select id="size-dropdown" name="size">Hamur Kalınlığı
                            <option disabled selected hidden value="hamur kalınlığı">Hamur Kalınlığı</option>
                            <option value="thin">Thin</option>
                            <option value="medium">Medium</option>
                            <option value="thick">Thick</option>
                        </select>
                 
                </label> 
            </div>
      </div> 
    </div>
          
        </FormGroup>  



        <FormGroup>

             <div id="extra-orders"> 
                <h4 style={{ marginRight: '14.5rem', marginBottom: '1rem', marginTop: '2rem'}}>Ek Malzemeler</h4>
                    <p style={{fontSize: 'medium', marginRight: '11rem', marginBottom: '1.5rem'}}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div id="lezzetler">
                    
                    <label className="checbox-style" style={{paddingRight: '4.5rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Pepperoni
                     </label>
                    
                    
                    <label className="checbox-style" style={{paddingRight: '4.5rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Sosis
                      </label>
                   
                    <label className="checbox-style">
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Kanada Jambonu
                     </label>
                    
                    <label className="checbox-style" style={{paddingRight: '3.5rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }} />  Tavuk Izgara
                     </label>
                    
                    <label className="checbox-style" style={{paddingRight: '4rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Soğan
                     </label>
                    
                    
                    <label className="checbox-style" style={{paddingRight: '7rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Mısır
                     </label>
                    
                    <label className="checbox-style" style={{paddingRight: '5rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Domates
                    </label>
                    
                    <label className="checbox-style" style={{paddingRight: '4.2rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/>  Sucuk
                    </label>
                    
                    <label className="checbox-style" style={{paddingRight: '4rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/> Jalepeno
                    </label>
                    
                    <label className="checbox-style" style={{paddingRight: '5rem' }}>
                    <input type="checkbox" style={{marginRight: '0.5rem' }}/> Sarımsak
                     </label>
                   
                    <label className="checbox-style" >
                    <input type="checkbox" style={{marginRight: '0.5rem' }} /> Biber
                    </label>
                    
                    </div>
            </div>
                

    </FormGroup>

  <div>
    <label style={{marginRight: '27rem', marginTop: '6rem'}} htmlFor="special-text" className="a">Sipariş Notu </label>
    <Input id="special-text" value="Siparişine eklemek istediğin bir not var mı?" style={{width: '40%',
    height: '50%', marginLeft: '28rem', marginTop: '1rem', marginBottom: '1.5rem'}}/>
    
  </div>
  <hr style={{ width: '40%', marginLeft: '28rem'}}/>

  <div id="siparis" style={{marginRight:'27rem'}}>
  
     <Button
          className="btn-1"
          color="warning"
          size="lg"
          onClick={decreaseCountHandler}
           >-</Button>  
       <input type="text" className="counter" value="1"/>
        
    <Button
          className="btn-1"
          color="warning"
          size="lg"
          onClick={increaseCountHandler}
          > + </Button>    
      </div>

    <div id="cart-price" style={{ marginLeft: '27em'}}>
        <div className="card-text" >
        <h6 style={{marginBottom: '1rem', marginTop: '1rem'}}>
            Sipariş Toplamı
        </h6> 

        <p style={{fontSize: 'small'}}> Seçimler
            <span className="price"  style={{marginLeft: '11rem'}}> 25.00₺</span> 
        </p>
        <p style={{color: '#CE2829', fontWeight: 'bold', fontSize: 'small'}}> Toplam
            <span className="total" style={{marginLeft: '11.5rem'}}> 110.50₺</span> 
        </p>
        <Button   id="order-button" color="warning">SİPARİŞ VER</Button>

      
       
    
    </div>
   </div> 

 
</Form>
  

     </div>             

            
        )
    }

export default SiparisFormu;




    