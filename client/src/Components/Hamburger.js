import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import hamburger from "../img/burger.png"
import Menu from "./Menu"

const Wrapper = styled.nav`    
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    @media only screen and (min-width: 500px){
        display: none;
    }
`;


const Img = styled.img`    
    height: 49px;
    width: 49px;
    margin: 0 auto;  
`;



const Hamburger = ({visibility,forceShow}) => {

    return(
        <Wrapper>
            <Img src={hamburger}></Img>
            { visibility || forceShow ? <Menu forceShow={true}></Menu> : null }
        </Wrapper>
        )

}


export default Hamburger