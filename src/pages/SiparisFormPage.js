import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button, FormFeedback } from "reactstrap";
import * as Yup from "yup";

const SiparisFormPage = () => {

     const [product, setProduct] = useState({
        name: "",
        size: "",
        price: 0,
        description: "",
        Pepperoni: false,
        Sosis: false,
        özel: "",
    });


  const formSchema = Yup.object().shape({
    name: Yup.string()
    .required("Must inlude valid name")
    .min(2, "Name must be at least 2 characters long."),
    size: Yup.string(),
    price: Yup.number(),
    description: Yup.string(),
    Pepperoni: Yup.boolean(),
    Sosis: Yup.boolean(),
    özel: Yup.string()
   })

   const [formErrors, setFormErrors] = useState({
    name: "",
    size: "",
    price: "",
    description: "",
    Pepperoni: "",
    Sosis: "",
    özel: "",
});

  const inputChangeHandler = (e) => {
    const {name, value,checked} = e.target;
    setProduct({...product, [name]: e.target.value});
    setProduct({...product, [name]: e.target.checked});
    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({...formErrors, [name]: "" })
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0]})
      })
  }
    
   useEffect(() => {
    formSchema
        .isValid(product)
        .then((valid ) => {
          if(valid)
          console.log("form datası geçerli")
          else 
          console.warn("form datası geçerli değil", formErrors)
         }, [product])  
      
   })

   useEffect(() => {
    console.warn("formErrors", formErrors);
   }, [formErrors]);

return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post("https://reqres.in/api/users",product )
            .then((res) => {
              console.log(res);
              
            });
        }}
      >
        <FormGroup>
          <Label htmlFor="product-name">Name</Label>
          <Input
            id="name-input"
            name="name"
            type="text"
            onChange={inputChangeHandler}
            value={product.name}
            invalid={!!formErrors.name}

          />
          {formErrors.name && <FormFeedback> {formErrors.name} </FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-size">Size</Label>
          <Input
            id="product-size"
            name="size"
            type="text"
            onChange={inputChangeHandler}
            value={product.size}
            
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-price">Price</Label>
          <Input
            id="product-price"
            name="price"
            type="number"
            onChange={inputChangeHandler}
            value={product.price}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-description">Description</Label>
          <Input
            id="product-description"
            name="description"
            type="text"
            onChange={inputChangeHandler}
            value={product.description}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-material">Pepperoni</Label>
          <Input
            id="product-material"
            name="material"
            type="checkbox"
            onChange={inputChangeHandler}
            checked={product.Pepperoni}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-material">Sosis</Label>
          <Input
            id="product-material"
            name="material"
            type="checkbox"
            onChange={inputChangeHandler}
            checked={product.Sosis}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-özel">Özel</Label>
          <Input
            id="product-özel"
            name="özel"
            type="text"
            onChange={(event) => {
              setProduct({ ...product, özel: event.target.value });
            }}
            value={product.özel}
          />
        </FormGroup>
        <a href="/siparisOnay">
        <Button type="submit" onClick="function()">Save</Button>
        </a>
        
                
            
      </Form>
    </div>
  );
};

export default SiparisFormPage;