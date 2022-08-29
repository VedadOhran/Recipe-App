import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
   <Container>
    <Wrapper>
      <TextContent>
        <Link to={"/"}>
           <img src={require("../assets/Logo.png")} />
           </Link>
        <p>On the other hand,we denounce with righteous indignation and dislike men who are so beguiled and demorilazed by the charms of pleasure of the moment</p>
      </TextContent>

      <FooterLinksWrapper>
      <FooterLinks>
        <h4>Tatebite</h4>
        <ul>
          <a href='#'><li>About Us</li></a>
          <a href='#'><li>Careers</li></a>
          <a href='#'><li>Contact Us</li></a>
          <a href='#'><li>Feedback</li></a>
        </ul>
      </FooterLinks>

      <FooterLinks>
        <h4>Legal</h4>
        <ul>
          <a href='#'><li>Terms</li></a>
          <a href='#'><li>Conditions</li></a>
          <a href='#'><li>Cookies</li></a>
          <a href='#'><li>Copyright</li></a>
        </ul>
      </FooterLinks>

      <FooterLinks>
        <h4>Follow</h4>
        <ul>
          <a href='#'><li>Facebook</li></a>
          <a href='#'><li>Twitter</li></a>
          <a href='#'><li>Instagram</li></a>
          <a href='#'><li>Youtube</li></a>
        </ul>
      </FooterLinks>

      </FooterLinksWrapper>
      </Wrapper>
      <hr></hr>

      <Copyright>
        <h5>&copy;2020 Tastebite - All Rights Reserved</h5>
      <SocialIconsWrapper>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
        </SocialIconsWrapper>
      </Copyright>
    </Container>
  )
}

const Container = styled.div`
  margin-top:5rem;
  background-color:#F5F5F5;
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:500px;
  gap:5rem;

  hr{
   width:90%;
   margin:0 auto;
  }

  @media(max-width: 768px){
    height:1000px;
  }
`

const Wrapper = styled.div`
   display:flex;
  align-items:center;
  justify-content:space-around;

  @media(max-width: 768px){
    flex-direction:column;
  }
`
const TextContent = styled.div`
text-align:center;
  p{
    max-width:350px;
    line-height:1.6;
    font-family: 'Inter', sans-serif;
      font-size:1rem;
      font-weight:400; 
  }
  
`
const FooterLinks = styled.div`
margin-top:1.5rem;
text-align:left;
  ul{
    list-style:none;
  }

li{
  padding:0.2rem 0;
}

  a{
    text-decoration:none;
    color:#7f7f7f;
    font-family: 'Inter', sans-serif;
      font-size:1.1rem;
      font-weight:400; 
  }

  h4{
    color:#000;
    font-family: 'Inter', sans-serif;
      font-size:1.2rem;
      font-weight:400; 
  }

  @media(max-width:768px){
    ul{
      margin-top:0.5rem;
    }
  }
  
`

const FooterLinksWrapper = styled.div`
display:flex;
gap:5rem;

   @media(max-width: 768px){
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
`

const Copyright = styled.div`
  background-color:#F5F5F5;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-inline:5rem;

  h5{
    color:#7f7f7f;
    font-family: 'Inter', sans-serif;
      font-size:1.1rem;
      font-weight:400; 
  }
  @media(max-width: 768px){
    flex-direction:column;

    h5{
      font-size:0.7rem;
    }
  }
`

const SocialIconsWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    gap:2rem;

    i{
      cursor: pointer;
      color:#7f7f7f;
      font-size:1.1rem;
    }
    @media(max-width: 768px){
    margin-top:2rem;
  }
`