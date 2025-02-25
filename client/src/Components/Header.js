import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import Menu from "./Menu"
import LoginButton from "./LoginButton"
import Hamburger from "./Hamburger"
import { Router, NavLink, useHistory, useLocation} from 'react-router-dom';
import { useAuthContext } from '../Components/context/AuthProvider';
import { logout } from './utils/authService';


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
    :hover{
        filter: invert(100%)
    }
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

const A = styled.a`
   :hover{
       cursor:pointer;
   }
`;

const RightInternalWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
`;





const Header = ({adressen,ActiveItem,backAdress,back}) => {
    const [visibility,setVisibility] = useState(false)
    const handleClick = ()=>{
        !visibility&&setVisibility(true)
        visibility&&setVisibility(false)
        console.log(visibility)
    }
    const link = backAdress==="hjem"?"":backAdress;

    const { user, isLoggedIn, isAdmin, setUser } = useAuthContext()

    console.log("Checking user object for Header")
    console.log(user)
    console.log(isLoggedIn)

    const handleLogout = async () => {
        await logout();
        setUser(null);
        setUser(null);
      };

    return(
        <StyledHeader>
            <NavLink to="/"><CompanyInitials>FG</CompanyInitials></NavLink>
            <RightInternalWrapper>
                <Div>
                    <A onClick={()=>handleClick()}><Hamburger visibility={visibility} ></Hamburger></A>
                    <Menu ActiveItem={ActiveItem}></Menu>
                </Div>
                <div onClick={()=>handleLogout}>
                    {adressen&&(<NavLink to="/profil"><LoginButton isLoggedIn={isLoggedIn} back={back}></LoginButton></NavLink>)}
                    {!adressen&&(<NavLink to={!back?"/login/"+ActiveItem:"/"+link}><LoginButton back={back}></LoginButton></NavLink>)}
                </div>
            </RightInternalWrapper>
        </StyledHeader>
        )
        

}


export default Header