import React from "react";
import { useState } from "react";
import axios from "axios";
import Main from "./layout/Main"
import "./App.css";




const App = () => {

  const [product, setProduct] = useState([]);

  return (
    <div className="App-header">
      <div className="header">
      <h1>Teknolojik Yemekler</h1>
     </div>
     
      <Main/>
    </div>
  );
};
export default App;
