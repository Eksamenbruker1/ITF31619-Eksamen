import React, { Component, useEffect ,useState} from "react"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import banner from "../img/contact.gif"



const Kontakt= () => {

    return(
        <div>
            <Header ActiveItem="Kontakt"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Kontakt oss" Width="Full"></ImageCard>
        </div>
        )

}


export default Kontakt