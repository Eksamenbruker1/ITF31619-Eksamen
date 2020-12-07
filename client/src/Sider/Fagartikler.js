import React, { Component, useEffect ,useState} from "react"
import ArticleList from "../Components/ArticleList"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import Valg from "../Components/Valg"
import banner from "../img/artikler.gif"
import styled from "styled-components"

const Line = styled.div`
    margin: 50px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 40px auto;
    }
    border-bottom: solid grey 1px;
`


const Fagartikler = () => {

    return(
        <div>
            <Header ActiveItem="fagartikler"></Header>
            <a href="#main"><ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Fagartikler" Width="Full"></ImageCard></a>
            <Line />
            <Valg></Valg>
            <Line />
            <ArticleList id="main"/>
            <Footer></Footer>
        </div>
        )

}


export default Fagartikler