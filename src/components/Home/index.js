import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "./index.css"


const Index = () => {
    const [blogsdata,setBlogsdata] = useState([])
    useEffect(()=>{
        axios.get("https://blogs-backend-gvr2.onrender.com")
        .then((result)=>{
            console.log(result)         
            setBlogsdata(result.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div>
        <h1 >Welcome to Blogs page Here you can type any blogs</h1>
        <Link to="/newblogs"><button style={{backgroundColor:"green",border:"none",padding:"10px",borderRadius:"10px",marginLeft:"20px",cursor:"pointer",color:"white"}}>New Blogs</button></Link>
        <div className='home-container'>
        {blogsdata.map((each)=> {
            return (
                <Link style={{textDecoration:"none",color:"black"}} to={`/updateblogs/${each._id}`}>
                <div className='sub-headings' >
                <h1>{each.Title}</h1>
                <p>{each.Description}</p>
                </div>
                </Link>
               
            )
        })}
        </div>
    </div>
  )
}

export default Index