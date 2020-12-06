import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import LoginForm  from "../Components/LoginForm"
import styled from "styled-components"
import AboutUs from "../Components/AboutUs"
import banner from "../img/login.gif"


const Heading = styled.h2`
    display:flex;
    justify-content:space-around;
    padding: 5px;
    margin: 0 auto;
    padding-top:150px;
    @media only screen and (max-width: 800px){
        
    }
`;

const Div = styled.div`
    margin-bottom: 200px;
`;

const Con = styled.div`
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 20px auto;
    }
    @media only screen and (min-width: 800px){
        width: 60%;
        margin: 20px auto;
    }
`;

const A = styled.a`
    margin-bottom: 200px;
    :active {
        opacity: 1;
        filter: invert(70%)
    }
    :hover {
        font-weight:900;
        opacity: 1;
        filter: invert(100%)
    }
    @media only screen and (max-width: 800px){
        display:none;
    }
    margin:0 auto;
`;

const Line = styled.div`
    margin: 50px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        display: none
    }
    border-bottom: solid grey 1px;
`


const Login = ({match}) => {
    let adress = match.params.back&&match.params.back
    if(adress==="oppdater-fagartikkel")adress+="/default"

    return(
        <div>
            <Header id="top" back={true} backAdress={adress}></Header>

            <a href="#login"><ImageCard imgSource={banner} TextColor="#1e1e1e" Width="Full"></ImageCard></a>
            <Line></Line>
            <Con><A href="#top">Up</A></Con>
            <Div>
                <Heading id="login">Login</Heading>
                <LoginForm adress={adress}></LoginForm>
            </Div>
            <Line ></Line>
            <Footer></Footer>
        </div>
        )

}


export default Login
