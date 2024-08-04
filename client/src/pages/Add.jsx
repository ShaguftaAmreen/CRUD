import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Add() {
  
const navigate=useNavigate()

  const handleClick = async e =>{
    e.preventDefault();
    try{
  await axios.post("http://localhost:8800/books",input);
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
          Add New Book
        </h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
        <input type="number" placeholder='price' onChange={handleChange} name='price'/>
        <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      </div>
      <button className='formButton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
