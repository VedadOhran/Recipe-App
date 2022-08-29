import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Recipes() {
 let params=useParams()
 const [details,SetDetails] = useState({})

const getRecipes = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const FoodDetail = await data.json()
    SetDetails(FoodDetail)
    console.log(details)
}
useEffect(()=>{
    getRecipes()
    console.log(details)
},[params.type])

  const showStep = details.analyzedInstructions?.map((item)=>{  //Map through array with instructions on how to make current dish
    return ( 
    <ol>
{item.steps.map((item)=> {
  return (
  <li key={item.number}>{item.step}</li>)
})}
    </ol>
    )  
})

  return (
    <>
    <Wrapper key={details.id}>
      <h1>{details.title}</h1>
      
      <RecipeInfo>
      <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      <img src={details.image} />
      </RecipeInfo>

      <DishInfo>
        <p>PREP TIME<br></br>{details.readyInMinutes} MINUTES</p>
        <p>SERVINGS <br></br>{details.servings} PEOPLE</p>
      </DishInfo>

      <RecipeInfo>

        <Ingredients>
          <h3>Ingredients</h3>
          <ul>
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))} </ul>
        </Ingredients>

        <Instructions>
          <h3>Instructions</h3>
          {showStep}
          </Instructions>

      </RecipeInfo>
    </Wrapper></>
    
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:2rem;
   max-width:1400px;
  margin:0 auto;
  margin-top:10rem;

  h1{
    font-family: 'Playfair Display', serif;
    font-size:3rem;
    max-width:800px;
  }

  p{
    font-family: 'Inter', sans-serif;
    line-height:1.8;
    max-width:600px;
  }

  img{
    width:100%;
    height:auto;
    max-width:700px;
    max-height:700px;
    border-radius:12px;
    border:none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media(max-width:1340px) {
    padding:1rem;
    img{
      max-width:500px;
    }

    p{
      max-width:500px;
    }

    h1{
      text-align:center;
      font-size:2.5rem;
    }
  }

  @media(max-width:768px){
    img{
      max-width:300px;
    }
    h1{
      text-align:center;
    }
  p{
    padding:2rem;
  }
  }

`
const DishInfo = styled.div`
  display:flex;
  margin-right:2rem;
  justify-content:flex-end;
  gap:1rem;

  @media(max-width:768px){
   justify-content:center;
   
  }
`
const RecipeInfo = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  gap:1rem;
`

const Ingredients = styled.div`
max-width:400px;
h3{
  font-size:2rem;
}

  li{
  font-family: 'Inter', sans-serif;
  padding:10px;
  font-size:1.2rem;
}

li::marker{
 content:"○";
 color:#ff642f;
 font-size:1.3rem
}
`
const Instructions  = styled.div`
  max-width:500px;
  padding:2rem;
  li{
  font-family: 'Inter', sans-serif;
  padding:10px;
}

h3{
  font-size:2rem;
}
li {
  font-size:1.2rem;
  font-family: 'Inter', sans-serif;
  padding:10px;
}

li::marker{
  color:#ff642f;
  font-size:1.3rem;
}

`

