import React, { Component, useEffect ,useState} from "react"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import banner from "../img/artikler.gif"



const Fagartikler = () => {

    return(
        <div>
            <Header ActiveItem="Fagartikler"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Fagartikler" Width="Full"></ImageCard>
        </div>
        )

}


export default Fagartikler