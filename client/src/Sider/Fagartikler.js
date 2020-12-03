import React, { Component, useEffect ,useState} from "react"
import ArticleList from "../Components/ArticleList"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import CMS from "../Components/CMS"
import banner from "../img/artikler.gif"


const Fagartikler = () => {

    return(
        <div>
            <Header ActiveItem="Fagartikler"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Fagartikler" Width="Full"></ImageCard>
            <CMS></CMS>
            <ArticleList/>
            <Footer></Footer>
        </div>
        )

}


export default Fagartikler