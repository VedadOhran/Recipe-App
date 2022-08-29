import React from 'react'
import styled from 'styled-components';
export default function Hero({ resultRef }) {

  const handleClick = () =>{
    resultRef.current?.scrollIntoView({behavior:'smooth'}) //Scroll to Categories 
  }
  return (
    <Wrapper>
      <TextContainer>
        <h1>Let's Start Cooking With Popular Recipes</h1>
        <p>
          Want to learn cook but confused how to start?<br></br>No need to worry
          again!
        </p>
        <Button onClick={handleClick}>Get Started</Button>
      </TextContainer>
      <img src={require("../assets/background_preview_rev_1.png")} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    padding:4rem;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    @media(max-width:768px){
      flex-direction:column-reverse;
      gap:2rem;
      padding:2rem;

      img{
        max-width:260px;
      }
    }
`

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    max-width:600px;
    min-width:300px;

    h1{
      font-size:3rem;
    }

    p{
      font-family: 'Inter', sans-serif;
      font-size:1.5rem;
    }

    @media(max-width:768px){
      h1{font-size:1.4rem;
      }

      p{
        font-size:0.9rem;
      }
    }
`

const Button = styled.button`
  background-color: #F5F5F5;
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
  width: 100%;

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