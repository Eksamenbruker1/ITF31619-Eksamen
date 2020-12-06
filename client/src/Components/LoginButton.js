import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';

const StyledButton = styled.div`
    min-width:90px;
    background-color: #1e88da;
    :hover{
        filter: invert(100%);
    }
    margin: 0;
    padding: 13px;
`;

const Innhold = styled.p`
    text-transform: uppercase;
    color: ${props => props.utheving};
    margin:0;
    font-weight:600;
`;
const LoginButton = ({back}) =>{
    
    return(
        <StyledButton utheving={back?"black":"white"}> 
            <Innhold  utheving={back?"black":"white"}>{back?"Tilbake":"Log inn"}</Innhold>
        </StyledButton>
        )

}


export default LoginButton