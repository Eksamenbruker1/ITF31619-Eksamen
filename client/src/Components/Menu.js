import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';

const MenuItemContainter = styled.ul`    
    display: flex;
    list-style-type: none;
    margin:0;
`;

const MenuItem= styled.li`    
    list-style-type: none;
    font-weight: 700;
    margin:0;
    color: ${props => props.Active ? "#479eb9" : "#1e1e1e"};
    margin-right: 10px;
    margin-top: 13px;
`;

const Wrapper = styled.nav`    
    display: flex;
    justify-content: center;
`;

const Menu = ({ActiveItem,setActive,name}) => {


    return(
        <Wrapper>
            <MenuItemContainter>
                <MenuItem Active={ActiveItem==="Hjem"?true:false}><Link to="/">Hjem</Link></MenuItem>
                <MenuItem Active={ActiveItem==="Kontorer"?true:false}><Link to="/kontorer">Kontorer</Link></MenuItem>
                <MenuItem Active={ActiveItem==="Fagartikler"?true:false}><Link to="/fagartikler">Fagartikler</Link></MenuItem>
                <MenuItem Active={ActiveItem==="Kontakt"?true:false}><Link to="/Kontakt">Kontakt</Link></MenuItem>
            </MenuItemContainter>   
        </Wrapper>
        )
}

export default Menu