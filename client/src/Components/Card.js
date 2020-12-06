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
    border: 1px solid #1e1e1e;
    border-bottom: 8px solid #1e1e1e;
    height: 20vh;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    background-color:${props => props.BkColor};
    width: ${props => props.ContainerWidth};
    position: relative;
    text-align: center;
    color: white;
    :hover{
        background-color:${props => props.BkColor};
        filter: invert(100%)
    }
    :hover > Title {
        color: "white"
    }
    :active {
        opacity: 1;
        height: 20vh + 4px;
        border-bottom: 4px solid #ffffff;
        filter: invert(70%)
    }
`;

const Title = styled.h2`
    :hover {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        perspective: 1000px;
    }
    font-weight: 600;
    margin: 0 20px 0 20px;
    text-transform: capitalize;
    color: ${props => props.Color};
    @media only screen and (max-width: 500px){
        font-size:100%;
    }
    color:${props => props.hover};
`;





const Card = ({Content,Width,color,TextColor}) => {
    const [isShown, setIsShown] = useState(false);


    return(
            <Container 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                BkColor={!color?"#1e88da":color} 
                ContainerWidth={Width==="Full"?"100%":Width}
                >
                <Title hover={isShown&&"black"} Color={!TextColor?"black":TextColor}>{Content}</Title>
            </Container>
        )

}


export default Card