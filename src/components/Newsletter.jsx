import React from 'react';
import styled from 'styled-components';

export default function Newsletter() {
  return (
    <Wrapper>
        <h1>Deliciousness<br></br> to your inbox</h1>
        <h4>Enjoy weekly hand picked recipes and reccomendations</h4>
    <EmailBox>
    <input type="email" placeholder="Email Adress"/>
    <Button>JOIN</Button>
    </EmailBox>
    <p>By joining our newsletter you agree to Terms and Conditions</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top:5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    background-color:#ffd7c9;
    height:500px;

    h1{
        font-family: 'Playfair Display', serif;
        font-size:4rem;
    }

    h4{
        font-size:1.5rem;
        font-family: 'Inter', sans-serif;
        font-weight:400;
    }

    p{
        font-family: 'Inter', serif; 
        font-weight:400;
        font-size:0.9rem;
    }

    @media(max-width:768px){
        h1{
            font-size:2.5rem;
        }
        h4{
            font-size:1rem;
            text-align:center;
        }
        p{
            text-align:center;
        }
    }
`

const EmailBox = styled.form`
    display:flex;
    flex-direction:row;
   
   input{
    padding:1rem;
    border-radius:8px;
    border:none;
   }

   input:focus{
    outline:none;
   }
`
const Button = styled.button`
    background-color:#ff642e;
    padding:1rem;
    border-radius:8px;
    border:none;
    cursor: pointer;
    color:#fff;
    font-weight:400;
    font-family: 'Inter', serif; 
`