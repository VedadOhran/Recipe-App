import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import {motion} from "framer-motion";

export default function Searched() {
const[visible,SetVisible] = useState(12)

    const [searched,SetSearched] = useState()
    const params=useParams()

    const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=99`)
    const recipes = await data.json();
    
    SetSearched(recipes.results)
    console.log(recipes.results)
    }

useEffect(()=>{
    getSearched(params.search)
},[params.search])

const showMore = () =>{
  SetVisible(prevValue => prevValue +4)
}

const searchedResults= searched && searched.slice(0,visible).map((item) =>{   return (
  <Card>
  <Link key={item.id} to={"/recipe/"+ item.id}>
  <img src={item.image}/>
    <h4>{item.title}</h4>
  </Link>
  </Card>
)
} ) 

  return (
    <>
    <Container>
      <Wrapper animate={{opacity:1}}
       initial={{opacity:0}}
       transition={{duration:0.5}}
       exit={{opacity:0}}>

        {searchedResults}
        <Button onClick={showMore}>Load More</Button>

      </Wrapper>
    </Container><Footer />
    </>
  )
}


const Container = styled.div`
margin-top:5rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;
  
  h3{
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-size:2rem;
  }
`
const Wrapper = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1.4rem;
  flex-wrap:wrap;
  max-width:1300px;
  margin:0 auto;
  flex-wrap:wrap;

  @media(max-width:768px){
   justify-content:center;
   flex-direction:column;
  }
`

const Card = styled.div `
  width:260px;
  height:260px;
  margin:16px;
  background-color:transparent;

  img{
    border-radius:8px;
    width: 100%;
    height:auto;
  }
  
  h4{
    color:#000;
    font-family: 'Inter', sans-serif;
      font-size:1.3rem;
      font-weight:400; 
    padding:10px;
  }

  a{
    text-decoration:none;
  }
`
const Button = styled.button`
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0 auto;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

&&hover,
&&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

&&:hover {
  transform: translateY(-1px);
}

&&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
`