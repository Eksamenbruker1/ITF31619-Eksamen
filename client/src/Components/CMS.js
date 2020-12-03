import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';
import Søk from "./Søk"
import Filter from "./Filter"


const Wrapper = styled.section`
    max-width: 100%;
    max-width: 933px;
    display:grid;
    grid-template-columns:1fr 1fr;
    row-gap:20px;
    column-gap:20px;
    padding: 5px;
    margin:50px;
    @media only screen and (max-width: 600px){
        grid-template-columns:1fr;
        
    }
    @media only screen and (min-width: 800px){
        margin: 0 auto;
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
    display:grid;
    grid-template-columns:1fr 1fr;
    width:30%;
    @media only screen and (max-width: 800px){
        width:30%;
    }
    justify-content:space-between;
    @media only screen and (max-width: 600px){
        flex-direction:column;
    }
`;



const CMS = () => {
    
    return(
            <Wrapper>
                <Link to="/login"><Button>Ny Artikkel</Button></Link>
                <Splitter>
                    <Søk ></Søk>
                    <Filter kategorier={["porno","johnny"]}></Filter>
                </Splitter>
            </Wrapper>
        )

}


export default CMS