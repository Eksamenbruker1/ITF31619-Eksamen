import React, { useEffect ,useState} from "react"
import styled from "styled-components"

/**
 * --Content--
 *      Velg Velg innholdet i form av h1 
 *      Valg: fri tekst
 *      
 * 
 */

const Container = styled.div`
    height: ${props => props.imgSource==="none"?"20vw":"auto"};
    background-color:${props => props.imgSource==="none"?"blue":"none"};
    width: ${props => props.ContainerWidth};
    position: relative;
    text-align: center;
    color: white;
`;

const Title = styled.h1`
    position: absolute;
    font-weight: 700;
    text-transform: capitalize;
    top: 50%;
    left: 50%;
    color: ${props => props.Color};
    transform: translate(-50%, -50%);
`;

const Image = styled.img`
    width:100%;
`;




const ImageCard = ({Content,Width,imgSource,TextColor}) => {

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