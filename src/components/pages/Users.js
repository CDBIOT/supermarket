import Axios from 'axios'
import { useState, useEffect} from 'react'
import ShowUsers from '../ShowUsers'
import { HiArrowUpTray } from 'react-icons/hi2'
import {API} from "aws-amplify"


function Users(){


const [user_id, setUserId] = useState()
const [nome, setName] = useState()
const [email, setEmail] = useState()
const [senha, setSenha] = useState()

async function cadastrarUsuario(e){
 //e.preventDefault()
    console.log(`O usuario ${name} usa a senha ${senha}`)
    
//Axios.post("http://localhost:3001/users",{
    await API.post("superExpress", "/users",{
        user_id: {user_id},
        name: {name},
        email: {email},
        senha:{senha}
        }).then((response)=>{
        console.log(response)
        .catch (error=> {
        console.log(error.response)

        })
        console.log(response)
        });
}

useEffect(() => {
    cadastrarUsuario()  
 }, []);
  
return(
<div>
    <h1> Submit New User</h1>
    <form onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="user_id"></label>
            <input type="text" value = {user_id} id ="user_id" name="user_id" placeholder = "Digite seu id" onChange={(e)=> setUserId(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="nome"></label>
            <input type="text" value = {nome} id ="nome" name="nome" placeholder = "Digite seu nome" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email"></label>
            <input type="text" value = {email} id= "email" name="email" placeholder = "Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="senha"></label>
            <input type="text" value = {senha}  id= "senha" name="senha" placeholder = "Digite sua senha" onChange={(e)=> setSenha(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value="Cadastrar"/>
        </div>
        <h3 >
    {user_id}
    {nome}
    {email}
    {senha}
    </h3>
   
    </form>
    {/*<ShowUsers />*/}
</div>

)


}

export default Users