import React from 'react';
import {useEffect, useState} from 'react';
import Axios from "axios";
import Loader from '../Loader';
import {Amplify, API}  from 'aws-amplify';

const ShowProducts = (props)=> {

const [equips, setEquips] = useState([]);
const [loading, setLoading] = useState(false);

function getProducts(e){
  //API.get("serverAwsIot","/dev/temps")
  API.get("superExpress", "/users")
  // Axios.get("http://localhost:3001/ShowProducts")
   .then((response) =>{
   setEquips(response.data);
   const data = response.data
   });
   {
   console.log(equips)
   setLoading(true)
  
   }
}

useEffect(() => {
  getProducts()
   
}, [])

return (  
    <div>        
    <select id = "products" value={props.value} onChange={(e) => props.selectValue(e.target.value)}>
    <option value = "" >Selecione o produto...</option>
        {products.map(products => {
        return (
                <option value={products.id} key={products.id}> 
                {products.marca}
                {products.product}
                {products.qtd}
                {products.price} </option>
                )  
        })} 
         {!loading && <Loader/>}
        </select>
        <h3 >{props.value}  </h3>

        </div>
        )
        
    }
export default ShowProducts
