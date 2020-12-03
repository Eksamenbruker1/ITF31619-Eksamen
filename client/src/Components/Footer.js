import React, { useEffect ,useState} from "react"
import styled from "styled-components"

const Container = styled.footer`
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 20px;
`;

const HrefText = styled.a`
    font-size: 60%;
    margin-left: 10px;
`;

const Footer = () => {

    return(
        <Container>
            <HrefText href="https://proff.no/selskap/rørleggeren-oslo-as/oslo/rørleggertjenester/IDNJJDU07RG/">Orgnr: 007 007 007</HrefText>
            <HrefText href="tel:99000000">99 00 00 00</HrefText>
            <HrefText href="mailto:igor@igor.no">igor@igor.no</HrefText>
        </Container>
        )

}


export default Footer