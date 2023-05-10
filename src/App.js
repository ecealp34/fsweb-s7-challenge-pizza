import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./layout/Main"
import "./App.css";




const App = () => {

  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    setTimeout(() => {
      axios
        .post("https://reqres.in/api/users", products)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          alert("İnternet'e bağlanılamadı")
        });
    }, 5000);
  }, []);


  return (
    <div className="App-header">
      <div className="header">
      <h2>Teknolojik Yemekler</h2>
     </div>
     
      <Main/>
    </div>
  );
};
export default App;
