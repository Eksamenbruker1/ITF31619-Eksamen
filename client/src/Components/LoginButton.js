import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';

const StyledButton = styled.p`
    background-color: #479eb9;
    color: white;
    font-weight:500;
    margin: 0;
    padding: 13px;
`;

const LoginButton = () => {

    return(
            <StyledButton><Link to="/login">Log inn</Link></StyledButton>
        )

}


export default LoginButton