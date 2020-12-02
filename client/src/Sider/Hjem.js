import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import banner from "../img/indexBanner.jpg"



const Hjem = () => {

    return(
        <div>
            <Header ActiveItem="Hjem"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Velkommen til FG Rørleggerservice AS" Width="Full"></ImageCard>
            <GridContainer></GridContainer>
            <Footer></Footer>
        </div>
        )

}


export default Hjem