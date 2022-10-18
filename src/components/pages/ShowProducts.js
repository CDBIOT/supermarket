import React from 'react';
import {useEffect, useState} from 'react';
import Axios from "axios";
import Product_list from '../Product_list';


const ShowProducts = ()=> {

const [equips, setEquips] = useState([]);
        
useEffect(() => {
    Axios.get("http://localhost:3001/ShowProducts")
    .then((response) =>{
    setEquips(response.data);
    });
    {
    console.log(equips)
    }
   
}, [])

return (  <div>
    
        <select id = "products">
        <option value = "" >Selecione o produto...</option>
        {equips.map(equips => {

        return (
                <option value={equips.id} key={equips.id}> 
                {equips.product}
                {equips.marca}
                {equips.qtd}
                {equips.price} </option>
                )  
        })}
         
        </select>
      
    <h1>{equips.product}</h1>
    <h3>{equips.product}{equips.marca}{equips.qtd}{equips.price}</h3>
  
        </div>
        )
        
    }
export default ShowProducts
