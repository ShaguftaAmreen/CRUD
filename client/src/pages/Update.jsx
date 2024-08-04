import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Update() {
  
const navigate=useNavigate()
const location =useLocation()
const bookId=location.pathname.split("/")[2]
//console.log(location.pathname.split("/")[2]);

  const handleClick = async e =>{
    e.preventDefault();
    try{
  await axios.put("http://localhost:8800/books/"+bookId,input);
  navigate("/");
    }
    catch(error){
      console.log(error)
    }
  }

  const [input,setInput]=useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

const handleChange=(e)=>{
setInput(prev=>({...prev,[e.target.name]:e.target.value}))
}
console.log(input);

  return (
    <div>
      <div className="form">
        <h1>
          Update the Book
        </h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
        <input type="number" placeholder='price' onChange={handleChange} name='price'/>
        <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      </div>
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update;

