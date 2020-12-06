import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import Menu from "./Menu"
import LoginButton from "./LoginButton"
import Hamburger from "./Hamburger"
import { Router, Link, useHistory, useLocation} from 'react-router-dom';


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

const Div = styled.div`
    display:flex;
    flex-direction:column;
`;

const StyledHeader = styled.header`
    z-index:99999;
    width: 100%;
    display: flex;
    justify-content:space-between;
    background-color: white;
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





const Header = ({ActiveItem,backAdress,back}) => {
    const [state,setState] = useState(false)


    const handleClick = ()=>{
        
        !state?setState(true):setState(false)


    }
    const link = backAdress==="hjem"?"":backAdress;

    return(
        <StyledHeader>
            <CompanyInitials>FG</CompanyInitials>
            <RightInternalWrapper>

                <Div>
                    <a href="#" onClick={()=>handleClick()}><Hamburger state={state} ></Hamburger></a>
                    <Menu ActiveItem={ActiveItem}></Menu>
                </Div>
                <Link to={!back?"/login/"+ActiveItem:"/"+link}><LoginButton back={back}></LoginButton></Link>
            </RightInternalWrapper>
        </StyledHeader>
        )
        

}


export default Header