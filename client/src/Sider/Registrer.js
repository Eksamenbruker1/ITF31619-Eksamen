import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import LoginForm  from "../Components/LoginForm"
import styled from "styled-components"
import AboutUs from "../Components/AboutUs"
import banner from "../img/login.gif"
import { NavLink } from 'react-router-dom';
import "../Components/Styles/styles.css"



const Heading = styled.h2`
    display:flex;
    justify-content:space-around;
    padding: 5px;
    margin: 0 auto;
    padding-top:150px;
    color:${props => props.page&&"white"};
    @media only screen and (max-width: 800px){
        
    }
`;

const Div = styled.div`
    margin-bottom: 90px;
`;

const Con = styled.div`
    display: flex;
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
    margin-left:90%;
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
    
`;

const Reg = styled.div`
    display: flex;
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 20px auto;
    }
    @media only screen and (min-width: 800px){
        width: 60%;
        margin: 20px auto;
    }
    margin-top: -400;
    
`;

const Line = styled.div`
    margin: 50px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        display: none
    }
    border-bottom: solid grey 1px;
`

const Invert = styled.div`
    filter:${props => props.page&&"Invert(100%)"};
`

const Register = ({match},key) => {
    //Nutty webhack 3:)
    const path = window.location.pathname.split("/")
    const href = window.location.href.split("/")
    const [page,setPage] = useState("registrer")
    

    let adress = match.params.back&&match.params.back
    if(adress==="oppdater-fagartikkel")adress+="/default"
    
    console.log(page)
    console.log("----------------------")
    console.log("kjkldfhgl")
    console.log(path[path.length-1])


    return(
        <>
            <Header id="top" back={true} backAdress={adress+"/"+path[path.length-1]}></Header>

            <a href="#login"><ImageCard imgSource={banner} TextColor="#1e1e1e" Width="Full"></ImageCard></a>
            <Line></Line> 
            <Invert page={page==="registrer"&&true}>
                <Con><A href="#top">Up</A></Con>
            
                <Div>
                {
                page==="login"&&
                (
                    <>
                        <Heading id="login">Logg inn</Heading>
                    </>
                )}
                {page==="registrer"&&
                (
                    <>
                        <Heading id="register" >Registrer</Heading>
                    </>
                )}
                    
                    <LoginForm page={page}></LoginForm>
                </Div>
                {
                page==="login"&&
                (
                    <>
                        <NavLink to="/registrer/login"><Reg><A href="">Registrer</A></Reg></NavLink>
                    </>
                )}
                {page==="registrer"&&
                (
                    <>
                        <NavLink to="/login/registrer"><Reg className="up200"><A href="">Logg inn</A></Reg></NavLink>
                    </>
                )} 
            </Invert>
            <Footer></Footer>
        </>
        )
        

}


export default Register
