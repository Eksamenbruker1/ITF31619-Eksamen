import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import banner from "../img/indexBanner.jpg"
import banner2 from "../img/jobb.jpg"
import AboutUs from "../Components/AboutUs"
import PageParagraph from "../Components/PageParagraph"
import Title from "../Components/Title"
import styled from "styled-components"
import AuthProvider from "../Components/context/AuthProvider"
import { useAuthContext } from '../Components/context/AuthProvider';



const Line = styled.div`
    margin: 50px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 40px auto;
    }
    border-bottom: solid grey 1px;
`


const Hjem = () => {
    const { user, isLoggedIn, isAdmin } = useAuthContext();
    console.log("------------------------")
    console.log(isLoggedIn)

    return(
        <div>
            <Header back={false} ActiveItem="hjem"></Header>
            <ImageCard imgSource={banner} TextColor="#1e1e1e" Content={isLoggedIn} Width="Full"></ImageCard>
            <GridContainer />
            <Line/>
            <ImageCard imgSource={banner2} TextColor="black" Width="900px"></ImageCard>
            <Line/>
            <Title width={"700px"} content={"Lang erfaring"} />
            <PageParagraph 
                content={
                    "Etter mange års erfaring som entreprenør, har vi lært at effektivitet både motiverer våre ansatte og skaper fornøyde kunder. Vi er opptatte av å fullføre hvert prosjekt innen våre satte tidsrammer, uten at det går utover kvalitet. Vi er opptatt av å ha dyktige, kvalifiserte fagarbeidere i vår bedrift. Vi holder oss kontinuerlig oppdatert på nye metoder og nytt utstyr, slik at vi hele tiden kan tilby høy kompetanse til våre kunder."
                    }
                />
            
            <PageParagraph 
                content={
                    "Hver kunde er akkurat like viktig for oss, uansett om oppdraget er stort eller lite. Vi har et stort fokus på å yte optimal service for våre kunder, og gjør alltid vårt beste for å imøtekomme dine ønsker og forventninger."
                    }
                />   
            <Footer></Footer>
        </div>
        )

}


export default Hjem