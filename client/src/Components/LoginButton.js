import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';
import { useAuthContext } from '../Components/context/AuthProvider'; 




const StyledButton = styled.div`
    min-width:109px;
    background-color: #1e88da;
    :hover{
        filter: invert(100%);
    }
    margin: 0;
    padding: 13px;
`;

const Innhold = styled.p`
    text-transform: uppercase;
    margin: 0 auto;
    color: ${props => props.utheving};
    font-weight:600;
`;
const LoginButton = ({back}) =>{
    const {user, setUser, isLoggedIn } = useAuthContext();

    

    const handleLogout = () =>{
        console.log("Resultat på get user info i Auth Provider 3 ------------------------------")

    }
    
    return(
        <StyledButton  onClick={()=>handleLogout} utheving={back?"black":"white"}> 
            {isLoggedIn&&
                <Innhold   utheving={back?"black":"white"}>Log ut ✖</Innhold>
            }
            {!isLoggedIn&&
                <Innhold  utheving={back?"black":"white"}>{back?"Tilbake↩":"Logg inn"}</Innhold>
            }
        </StyledButton>
        )

}


export default LoginButton