import React from 'react' 
import {NavLink} from "react-router-dom"
import { Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import styled from 'styled-components'
import { forwardRef } from "react";

 const Results = forwardRef((props, ref) => {
  return (
   <Container ref={ref}>
     <h3>Categories</h3> 
   <Wrapper>
   <Splide options={{perPage:5,
   pagination:false,
   type:'loop',
   padding: '1rem',
   gap:"1.5rem",
   breakpoints:{
      1024: {
            perPage: 4,
      },
      768:{
            perPage:3,
            margin:"0 auto",    
      }
   }
    }}>
    <SplideSlide>
      <NavLink to={"/query/pasta"}>
            <img src={require("../assets/pasta.jpg")}/>
            <h4>Pasta</h4>
      </NavLink>
      </SplideSlide>

      <SplideSlide>
             <NavLink to={"/query/pizza"}>
                <img src={require("../assets/pizza.jpg")}/>
                <h4>Pizza</h4>
            </NavLink>
          </SplideSlide>

          <SplideSlide> 
            <NavLink to={"/query/vegan"}>
                <img src={require("../assets/vegan.jpg")}/>
                 <h4> Vegan</h4>
           </NavLink>
          </SplideSlide>

          <SplideSlide> 
             <NavLink to={"/query/seafood"}>
                <img  src={require("../assets/seafood.jpg")}/>
                <h4>Sea Food</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide>
              <NavLink to={"/query/soups"}>
                <img  src={require("../assets/soups.jpg")}/>
                <h4>Soups</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide> 
             <NavLink to={"/query/pancakes"}>
                <img  src={require("../assets/pancakes.jpg")}/>
                <h4>Pancakes</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide>
              <NavLink to={"/query/meat"}>
                <img  src={require("../assets/meat.jpg")}/>
                <h4>Meat</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide>
              <NavLink to={"/query/salad"}>
                <img  src={require("../assets/salad.jpg")}/>
                <h4>Salad</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide>
              <NavLink to={"/query/wafles"}>
                <img  src={require("../assets/wafles.jpg")}/>
                <h4>Wafles</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide> 
             <NavLink to={"/query/desserts"}>
                <img src={require("../assets/deserts.jpg")}/>
                 <h4>Desserts</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide> 
            <NavLink to={"/query/smoothies"}>
                <img src={require("../assets/smoothies.webp")}/>
                <h4>Smoothies</h4>
          </NavLink>
          </SplideSlide>

          <SplideSlide>
              <NavLink to={"/query/breakfast"}>
                <img  src={require("../assets/breakfast.jpg")}/>
                <h4>Breakfast</h4>
          </NavLink>
          </SplideSlide>
          </Splide>
          </Wrapper>
          </Container>
  )
})
export default Results;

const Container = styled.div`
      margin-top:5rem;
      display:flex;
      flex-direction:column;
      gap:2rem;

      h3{
       text-align:center;
       font-family: 'Inter', sans-serif;
       font-weight:600;
       font-size:2rem;
      } 
`

const Wrapper = styled.div`
margin:4rem 0rem;

img{
width:100%;
height:100%;
min-height:170px;
max-height:170px;
border-radius:8px;
}
a{
      color:#000;
      text-decoration:none;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:1rem;
      font-family: 'Inter', sans-serif;
      font-size:1.3rem;
      font-weight:400;
      }

      h4{
      font-family: 'Inter', sans-serif;
      font-size:1.3rem;
      font-weight:400; 
      }

      @media(max-width:768px){
            h4 {
            font-size:1rem;
            }
      }
     
`

