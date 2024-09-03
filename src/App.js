import React from 'react'
import Home from "../src/components/Home"
import NewBlogs from "../src/components/NewBlogs"
import Updateblogs from "../src/components/Updateblogs"
import BlogsItem from "../src/components/BlogsItem"
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newblogs" element={<NewBlogs/>}/>
        <Route path="/updateblogs/:id" element={<Updateblogs/>}/>
        <Route path="/updateblog/:id" element={<BlogsItem/>}/>
      
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App