import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';


const Wrapper = styled.button`
    background-color:#f0f0f0;
    width:150px;
    font-size:120%;
    color: black;
    border:  0;
    padding:40px;
    font-weight:500;
    :hover{
        background-color:#e17725;
        color:#1e88da;
        border: 2px solid #1e88da;
        padding:37px;
    }
    @media only screen and (max-width: 800px){
        padding:10px 30px;
        border-radius:40px;
        color: #479eb9;
        border: 3px solid #479eb9;
        
    }
    :focus, :active :enabled{
        border: 3px solid #1e88da;
        background-color:#e17725;
    }
    @media only screen and (max-width: 600px){
        width:100%;
    }

`;

const Input = styled.input`
    max-width: 75px;
`;



const Søk = () => {
    const [søk, setSøk] = useState(false);
   
    return(
            <Wrapper søk={søk} onClick={()=>setSøk(!søk?true:true)}>
                {søk?<Input type="text"></Input>:"Søk"}
            </Wrapper>
        )

}


export default Søk