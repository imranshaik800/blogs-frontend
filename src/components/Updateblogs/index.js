import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link ,useNavigate} from 'react-router-dom'
import "./index.css"

const Index = () => {
    const {id} = useParams()
    const [Title,setTitle] = useState("")
    const [Description,setTextarea] = useState("")
    const navigate = useNavigate()
  
    useEffect(()=>{
        axios.get("https://blogs-backend-t44p.onrender.com/updateblog/"+id)
        .then((result)=>{
            setTitle(result.data.Title)
            setTextarea(result.data.Description)
        })
    },[id])

    const DeleteItems = () => {
      axios.delete("https://blogs-backend-t44p.onrender.com/delete/"+id)
      .then((result)=>{
          navigate("/")
        
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  return (
    <div className='bg-container'>
        <div className='text-container'>
          
        <h1>{Title}</h1>
        <p>{Description}</p>
      
        <Link to={"/updateblog/"+id}><button style={{backgroundColor:"green",padding:"10px",border:"none",borderRadius:"10px",cursor:"pointer",color:"white",margin:"20px"}}>Update</button></Link>
        <button style={{backgroundColor:"red",padding:"10px",border:"none",borderRadius:"10px",cursor:"pointer",color:"white"}}onClick={DeleteItems}>Delete</button>

        </div>
     

    </div>
  )
}

export default Index
