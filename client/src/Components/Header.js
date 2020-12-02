import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import Menu from "./Menu"
import LoginButton from "./LoginButton"

/**
 * --ActiveItem--
 *      Velg hvilken MenuItem som skal være highlighted
 *      Valg: Hjem, Kontorer, Fagartikler, Kontakt
 *
 * 
 */

const CompanyInitials = styled.p`
    font-weight: 700;
    font-size: 1.5em;
    color: #479eb9;
    margin: 0;
    margin-left: 20px;
`;

const StyledHeader = styled.header`
    z-index:99999;
    display: flex;
    justify-content:space-between;
    background-color: white;
    border-bottom:solid 1px #e6e6e8;
    height: 50px;
    align-items:center;
`;


const Login = styled.button`
    background-color: blue;
`;

const RightInternalWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
`;




const Header = ({ActiveItem}) => {

    return(
        <StyledHeader>
            <CompanyInitials>FG</CompanyInitials>
            <RightInternalWrapper>
                <Menu ActiveItem={ActiveItem}></Menu>
                <LoginButton></LoginButton>
            </RightInternalWrapper>
        </StyledHeader>
        )
        

}


export default Header