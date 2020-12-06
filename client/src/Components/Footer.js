import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import AboutUs from "./AboutUs";

const Container = styled.footer`
    display: flex;
    justify-content: space-around;
    flex-direction:column;
    margin: 0 auto;
    margin-top: 50px;
    @media only screen and (max-width: 800px){
        width: 100%;
        margin: 0 auto;
    }
    background-color:#181818;
`;


const Div = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    flex-direction:row;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 50px;
    @media only screen and (max-width: 800px){
        width: 70%;
        margin: 65px auto;
    }
    
`;

const HrefText = styled.a`
    color: #ffc107;
    font-size: 80%;
    margin-left: 10px;
`;

const Footer = () => {

    return(
        <Container>
            <AboutUs></AboutUs>
            <Div>
                <HrefText href="https://proff.no/selskap/rørleggeren-oslo-as/oslo/rørleggertjenester/IDNJJDU07RG/">Orgnr: 007 007 007</HrefText>
                <HrefText href="tel:99000000">99 00 00 00</HrefText>
                <HrefText href="mailto:igor@igor.no">igor@igor.no</HrefText>
            </Div>
        </Container>
        )

}


export default Footer