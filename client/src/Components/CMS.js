import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';


const Wrapper = styled.section`
    max-width: 80%;
    display:flex;
    justify-content:space-between;
    padding: 5px;
    margin: 0 auto;
    margin-top:50px;
    @media only screen and (max-width: 800px){
        
    }
`;
const Button = styled.button`
    background-color:#f0f0f0;
    font-size:120%;
    color: black;
    border: solid 1px #c7c7c7;
    padding:40px;
    font-weight:500;
    @media only screen and (max-width: 800px){
        padding:10px 30px;
        border-radius:40px;
        background-color:#479eb9;
        color: white;
        border: none;
        
    }

`;
const Button2 = styled.button`
    background-color:#f0f0f0;
    font-size:120%;
    color: black;
    border: solid 1px #479eb9;
    padding:40px;
    font-weight:500;
    @media only screen and (max-width: 800px){
        padding:10px 30px;
        border-radius:40px;
        color: #479eb9;
        border: 3px solid #479eb9;
        
    }

`;

const Splitter = styled.section`
    display:flex;
    width:30%;
    @media only screen and (max-width: 800px){
        width:55%;
    }
    justify-content:space-between;
`;



const CMS = () => {

    return(
            <Wrapper>
                <Link to="/login"><Button>Ny Artikkel</Button></Link>
                <Splitter>
                    <Button2>Søk</Button2>
                    <Button2>Filter</Button2>
                </Splitter>
            </Wrapper>
        )

}


export default CMS