import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export default function Search() {

    const[input,SetInput] = useState("")
    const navigate= useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        navigate("/searched/"+input) //Navigte to searced component and load value from input 
    }
    
  return (
        <FormStyle onSubmit={submitHandler}>
          <div>
         <input autoComplete="off" type="text"
          value={input}
          onChange={(e)=> SetInput(e.target.value)} //Get value from input
          placeholder="Search"/>
        </div>
        </FormStyle>
)
}


const FormStyle = styled.form`
 input{
  border-radius:50px;
  border:none;
  padding:10px;
  outline:none;
  font-size:1rem;
  background-color:#fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: 0.35s all ease-in;
 }

 input:hover{
  transform:scale(1.1)
 }

`

