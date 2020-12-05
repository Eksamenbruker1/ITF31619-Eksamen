import React, { useEffect ,useState} from "react"
import styled from "styled-components"

/**
 * --Content--
 *      Velg Velg innholdet i form av h1 
 *      Valg: fri tekst
 *      
 * 
 */

const Container = styled.section`
    
    height: ${props => props.imgSource==="none"?"20vw":"auto"};
    background-color:${props => props.imgSource==="none"?"blue":"none"};
    width: ${props => props.ContainerWidth};
    position: relative;
    text-align: center;
    margin-bottom:${props => props.fit?"20px":"0px"};
    color: white;
`;

const Title = styled.h1`
    position: absolute;
    padding: 10px;
    background-color:#ffffff;
    border-radius:11px;
    border: 2px solid black;
    font-weight: 700;
    text-transform: capitalize;
    top: 50%;
    left: 50%;
    color: ${props => props.Color};
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 800px){
        font-size:120%;
    }
    @media only screen and (max-width: 500px){
        font-size:80%;
    }
    @media only screen and (min-width: 1500px){
        font-size:490%;
    }

    @media only screen and (min-width: 1200px){
        font-size:340%;
    }
`;

const Image = styled.img`
    width:100%;
`;




const ImageCard = ({Content,Width,imgSource,TextColor,fit}) => {

    return(
        <div>
            <Container ContainerWidth={Width==="Full"?"100%":Width}>
                <Title Color={!TextColor?"black":TextColor}>{Content}</Title>
                {imgSource === "none"?"none":<Image src={imgSource} ></Image>}
            </Container>
        </div>
        )

}


export default ImageCard