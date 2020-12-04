import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import { NavLink } from 'react-router-dom';

const MenuItemContainter = styled.ul`    
    display: flex;
    list-style-type: none;
    margin:0;
`;

const MenuItem= styled.li`    
    list-style-type: none;
    font-weight: 700;
    margin:0;
    
    margin-right: 10px;
    margin-top: 13px;
    & > a {
        color: ${props => props.Highlight ? "#479eb9" : "#1e1e1e"};
    }
`;


const Wrapper = styled.nav`    
    display: flex;
    justify-content: center;
`;

const Menu = ({ActiveItem,setActive,name}) => {

    

    return(
        <Wrapper>
            <MenuItemContainter>
                <MenuItem Highlight={ActiveItem==="Hjem"?true:false}>
                    <NavLink exact to="/">Hjem</NavLink>
                </MenuItem>
                <MenuItem Highlight={ActiveItem==="Kontorer"?true:false}>
                    <NavLink exact to="/kontorer">Kontorer</NavLink>
                </MenuItem>
                <MenuItem Highlight={ActiveItem==="Fagartikler"?true:false}>
                    <NavLink exact to="/fagartikler">Fagartikler</NavLink>
                </MenuItem>
                <MenuItem Highlight={ActiveItem==="Kontakt"?true:false}>
                    <NavLink exact to="/Kontakt">Kontakt</NavLink>
                </MenuItem>
            </MenuItemContainter>   
        </Wrapper>
        )
}

export default Menu