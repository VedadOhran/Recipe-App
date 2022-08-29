import styled from "styled-components"
import Search from "./Search"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <Wrapper>
        <SocialIconsWrapper>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
        </SocialIconsWrapper>
       <Link to={"/"}> <img src={require("../assets/Logo.png")}/></Link>
        <Search />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:50px;
    background-color:#F5F5F5;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media(max-width:768px) {
      flex-direction:column;
      height:150px;

  img{
    width:60px;
    height:20px;
  }

}

    img{
      
      width:140px;
      height:40px;

    }
`
const SocialIconsWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    gap:2rem;

    i{
      cursor: pointer;
    }
`