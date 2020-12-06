import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';
import Menu from "./Menu"


const Wrapper = styled.div`
    margin:0 auto;
    max-width: ${props => props.width};
    margin-top: 50px;
    margin-bottom: 20px;
`

const H3 = styled.h3`
    color: black;
    max-width: 700px;
    margin:0 auto;
    @media only screen and (max-width: 800px){
        width: 80%;
    }
    @media only screen and (max-width: 500px){
        width: 70%;
    }
    margin-bottom: 5px;
    opacity: 0.8;
`


const Title = ({content,width}) => {
    console.log(width)
    return(
        <Wrapper width={width}>
            <Link to="/fagartikler"><a href=""></a></Link>
            <H3>{content}</H3>
        </Wrapper>
        )

}


export default Title