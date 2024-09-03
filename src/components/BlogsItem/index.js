import React,{useState,useEffect} from 'react'
import axios from "axios"

import { useParams,useNavigate } from 'react-router-dom'
import "./index.css"



const Index = () => {
    const {id} = useParams()
    const [Title,setTitle] = useState("")
    const [Description,setTextarea] = useState("")
    const navigate = useNavigate("")

    useEffect(()=>{
        axios.get("https://blogs-backend-gvr2.onrender.com/updateblog/"+id)
        .then((result)=>{
            setTitle(result.data.Title)
            setTextarea(result.data.Description)
        })
    },[id])

    const SubmitForm = (event) => {
        event.preventDefault()
        axios.put("https://blogs-backend-gvr2.onrender.com/"+id,({Title:Title,Description:Description}))
        .then((result)=>{
            navigate("/")
            console.log(result)
           
        })
        .catch((err)=>{
            console.log(err)
        })
     
    }
  return (
    <div className='bg-container'>     
        <div className='form-card'> 
        <form onSubmit={SubmitForm} className='form-container'>
            <label>Enter The Title</label>
            <input value={Title} onChange={(event) => setTitle(event.target.value)} className="input-element" type="text"/>
            <label>Enter the description</label>
            <textarea value={Description} onChange={(event) => setTextarea(event.target.value)} className="input-element" rows="10" cols="30"></textarea>
            <button type="submit" style={{backgroundColor:'green',padding:"10px",border:"none",borderRadius:"10px",cursor:"pointer",color:"white"}}>Update</button>
        </form>
        </div>
    </div>
  )
}

export default Index