import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';
import SelectBox from "./SelectBox"


const Wrapper = styled.button`
    background-color:#f0f0f0;
    width: 150px;
    font-size:120%;
    color: black;
    border: 0;
    padding:40px;
    :hover{
        background-color:#1e88da;
        color:#ffc107;
        border: 2px solid #ffc107;
        padding:37px;
        @media only screen and (max-width: 800px){
        padding:10px 30px;
        }
    }
    font-weight:500;
    @media only screen and (max-width: 800px){
        padding:10px 30px;
        border-radius:40px;
        color: #479eb9;
        border: 3px solid #479eb9;
        
    }
    :focus, :active{
        background-color:#1e88da;
        color:#ffc107;
    }
    @media only screen and (max-width: 600px){
        width:100%;
        margin-top: 10px;
    }

`;

const Input = styled.input`
    max-width: 150px;
`;

const Select = styled.select`
    max-width: 150px;
`;




const Filter = (kategorier) => {
    const [state, setState] = useState(false)
    const kategorierComp = kategorier.kategorier


    return(
            <Wrapper onClick={()=>setState(true)}>
                {state?<SelectBox kategorier={kategorierComp}></SelectBox>:"Filter"}
            </Wrapper>
        )

}


export default Filter