import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import banner from "../img/indexBanner.jpg"
import LoginForm  from "../Components/LoginForm"
import styled from "styled-components"

const Heading = styled.h2`
    max-width: 80%;
    display:flex;
    justify-content:space-around;
    padding: 5px;
    margin: 0 auto;
    margin-top:150px;
    @media only screen and (max-width: 800px){
        
    }
`;


const Login = () => {

    return(
        <div>
            <Header back={true}></Header>
            <Heading>Login</Heading>
            <LoginForm></LoginForm>
            <Footer></Footer>
        </div>
        )

}


export default Login
