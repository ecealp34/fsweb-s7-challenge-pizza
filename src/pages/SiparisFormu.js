import React from "react"
import "./SiparisFormu.css"
import { Button } from "reactstrap"

const SiparisFormu = () => {
    return (

    <div className="product-container">
    <form>
        <formGroup>
                
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
        
            <formGroup>
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
                        <select id="size" name="size">Hamur Kalınlığı
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
                <h4>Ek Malzemeler</h4>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div id="lezzetler">
                    
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Pepperoni
                    </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox"/>
                    Sosis
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Kanada Jambonu
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Tavuk Izgara
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Soğan
                    </label>
                    
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Mısır
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Domates
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Sucuk
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Jalepeno
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Sarımsak
                    </label>
                    <label className="checbox-style">
                    <input type="checkbox" />
                    Biber
                    </label>
                    </div>
            </div>
                

    </formGroup>

  <div>
    <label htmlFor="özel-not" className="a">Sipariş Notu </label>
    <input id="özel-not" text="Siparişine eklemek istediğin bir not var mı?"/>
    
  </div>
                    
                    
                   
                   
                    
    

    <div className="cart-price">
        <h3>
            Sipariş Toplamı
        </h3> 

        <h4> Seçimler
            <span className="price">25.00₺</span> 
        </h4>
        <h4> Toplam
            <span className="total">110.50₺</span> 
        </h4>
        <Button color="primary">SİPARİŞ VER</Button>

    </div>
</form>
</div>

   

                

            
        )
    }

export default SiparisFormu;




    