import React, { useEffect ,useState} from "react"
import styled from "styled-components"

/**
 * --Content--
 *      Velg Velg innholdet i form av h1 
 *      Valg: fri tekst
 *      
 * 
 */

const Container = styled.a`
    height: 20vh;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    background-color:${props => props.BkColor};
    width: ${props => props.ContainerWidth};
    position: relative;
    text-align: center;
    color: white;
`;

const Title = styled.h2`
    font-weight: 700;
    margin: 0 20px 0 20px;
    text-transform: capitalize;
    color: ${props => props.Color};
`;




const Card = ({Content,Width,color,TextColor}) => {


    return(
            <Container BkColor={!color?"#479eb9":color} ContainerWidth={Width==="Full"?"100%":Width}>
                <Title Color={!TextColor?"black":TextColor}>{Content}</Title>
            </Container>
        )

}


export default Card