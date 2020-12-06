import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';
import Menu from "./Menu"


const Wrapper = styled.div`
    margin:0 auto;
    max-width: 700px;
    margin-bottom: 50px;
`

const P = styled.p`
    color: black;
    max-width: 700px;
    margin:0 auto;
    @media only screen and (max-width: 800px){
        width: 80%;
    }
    @media only screen and (max-width: 500px){
        width: 70%;
    }
    margin-bottom: 30px;
`


const PageParagraph = ({content}) => {

    return(
        <Wrapper>
            <Link to="/fagartikler"><a href=""></a></Link>
            <P>{content}</P>
        </Wrapper>
        )

}


export default PageParagraph