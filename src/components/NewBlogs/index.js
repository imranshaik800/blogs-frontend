import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "./index.css"



const Index = () => {
    const [title,setTitle] = useState("")
    const [description,setTextarea] = useState("")
    const navigate = useNavigate()

    const SubmitForm = (event) => {
        event.preventDefault()
        axios.post("https://blogs-backend-t44p.onrender.com/newblogs",{Title:title,Description:description})
        .then((result)=>{
            console.log(result)
          
            navigate("/")
           
            
        })
        .catch((err)=>{
            console.log(err)
        })
     
    }
  return (
    <div className='bg-container'>
        <h1>Welcome to Newblogs </h1>
        <div className='form-card'>
        <form onSubmit={SubmitForm} className='form-container'>
            <label>Enter The Title</label>
            <input onChange={(event) => setTitle(event.target.value)} className="input-element" type="text"/>
            <label>Enter the description</label>
            <textarea onChange={(event) => setTextarea(event.target.value)} className="input-element" rows="10" cols="30"></textarea>
            <button type="submit" style={{backgroundColor:'green',padding:"10px",border:"none",borderRadius:"10px",cursor:"pointer",color:"white"}}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Index
