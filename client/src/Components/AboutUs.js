import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';
import Menu from "./Menu"


const WrapperOuter = styled.div`
    background-color:#212121;
    width: 100%;
`

const Container = styled.div`
    margin-bottom:90px;
`

const Wrapper = styled.div`
    background-color:#212121;
    margin:0 auto;
    max-width: 575px;
    margin-top: 50px;
    margin-bottom: 40px;
    @media only screen and (max-width: 800px){
        width: 80%;
    }
    @media only screen and (max-width: 500px){
        width: 70%;
    }
`

const H4 = styled.h4`
    color:#317dc4;
    margin:0 auto;
    font-size: 150%;
    margin-bottom: 10px;
    @media only screen and (max-width: 800px){
        width: 90%;
    }
    @media only screen and (max-width: 500px){
        width: 80%;
    }
    max-width: 700px;
`
const H5 = styled.h5`
color:#dde2eb;
font-weight: 400;
margin:0 auto;
margin-bottom: 10px;
@media only screen and (max-width: 800px){
    width: 90%;
}
@media only screen and (max-width: 500px){
    width: 80%;
}
max-width: 700px;
`

const P = styled.p`
    color:#c0c7d1;
    max-width: 700px;
    margin:0 auto;
    @media only screen and (max-width: 800px){
        width: 90%;
    }
    @media only screen and (max-width: 500px){
        width: 80%;
    }
    margin-bottom: 50px;
`


const A = styled.a`
    color:#e17725;
`

const Line = styled.div`
    margin: 50px 0;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 20px auto;
    }
    border-bottom: solid grey 1px;
`

const LineSmall = styled.div`
    margin-top:16px;
    width: 50%;

    @media only screen and (max-width: 800px){
        width: 60%;
    }
    border-bottom: solid #e17725 1px;
`

const AboutUs = () => {
    const data = require('../data/dataKontor.json');
    let antallAnsatte = 0;
    for(let i = 0; i< data.length;i++){
        for(let j = 0;j < data[i].Kontor.length;j++){
            for(let k = 0; k < data[i].Kontor[j].ansatte.length;k++){
                antallAnsatte++;
            }
        }
    
    }
    const [state, setState] = useState(antallAnsatte);
    
    return(
        <WrapperOuter>
            <Container>
                <Wrapper>
                    <Line />
                    <H4>Om oss</H4>
                    <P>Vi har <Link to="/kontorer"><A href="">{state}</A></Link> rørleggere som gjør alt fra å åpne tette sluk og skifte blandebatterier, til å utføre større oppdrag som reparasjon av rørbrudd og utskifting av gamle fyrkjeler. Drømmer du om å rehabilitere badet, skal bygge hus eller hytte, eller ønsker mer miljøvennlige oppvarmingsmuligheter for boligen, bidrar vi gjerne med tips og inspirasjon til små og store utbedringer.</P>
                    <H5>Navigasjon</H5>
                    <LineSmall/>
                    <Menu spreadDown={true} ></Menu>
                </Wrapper>
            </Container>
        </WrapperOuter>
        )

}


export default AboutUs