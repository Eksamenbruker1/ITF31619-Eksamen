import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import Card from "./Card"
import { NavLink } from 'react-router-dom';

const Wrapper = styled.main`
    max-width: 1000px;
    margin: 40px;
    display:grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: 1fr 3fr;
    margin: 10px;
    margin: 0 auto;
    margin-top: 2px;
    @media only screen and (max-width: 800px){
        margin: 10px;
        margin-top: 10px;
    }
    
`;

const GridContainer = () => {
    return(
        <Wrapper > 
            <NavLink exact to="/kontorer">
                <Card route="kontorer" Content="Kontorer" >Kontorer</Card>
            </NavLink>
            <NavLink exact to="/kontakt">
                <Card route="kontakt" Content="Kontakt" >Kontakt</Card>
            </NavLink>
            <NavLink exact to="/fagartikler" style={{gridColumnStart: 1, gridColumnEnd: 3}}>
                <Card route="fagartikler" Content="Fagartikler" isLast={true}>Fagartikler</Card>
            </NavLink>
        </Wrapper>
        )

}


export default GridContainer