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
    border-top-left-radius:2px;
    border-top-right-radius:2px;
    border-bottom-left-radius:2px;
    border-bottom-right-radius:2px;
    border-top: 1px solid #cecece;
    border-bottom: 2px solid #36363c;
    border-right: ${props => props.center&&"2px solid #1e1e1e"};
    border-left: ${props => props.center&&"2px solid #1e1e1e"};
    height: ${props => props.imgSource==="none"?"20vw":"auto"};
    background-color:${props => props.imgSource==="none"?"blue":"none"};
    width: ${props => props.ContainerWidth};
    @media only screen and (max-width: 800px){
        width: 100%;
        border-right: ${props => props.center&&"none"};
        border-left: ${props => props.center&&"none"};
    }
    position: relative;
    text-align: center;
    margin-bottom:${props => props.fit?"20px":"0px"};
    color: white;
    margin-bottom: ${props => props.bottomMargin};
    @media only screen and (max-width: 600px){
        margin-bottom:30px;
    }
    @media only screen and (max-width: 800px){
        margin-bottom: ${props => props.bottomMargin&&"0"};
    }
    margin: ${props => props.center&&"0 auto"};
    
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
    :hover{
        filter:invert(100%);
    }
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




const ImageCard = ({Content,Width,imgSource,TextColor,fit,noBottomMargin}) => {
    const width = Width;
    const center = Width!=="Full"&&true

    return(
        <div>
            <Container bottomMargin={noBottomMargin?"-50px":"75px"} center={center} ContainerWidth={width==="Full"?"100%":width}>
                {Content!==undefined && (
                        <Title className="imageCardTitle" Color={!TextColor?"#1e1e1e":TextColor}>{Content}</Title>
                    )}
                
                {imgSource === "none"?"none":<Image src={imgSource} ></Image>}
            </Container>
        </div>
        )

}


export default ImageCard