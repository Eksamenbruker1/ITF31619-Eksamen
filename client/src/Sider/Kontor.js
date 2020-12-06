import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import banner from "../img/bannerRørlegger.gif"
import telefon from "../img/telefon.gif"
import props from 'prop-types';
import { Router, Link, useHistory,useParams} from 'react-router-dom';
import Article from "../Components/Article"
import AnsatteContainer from "../Components/AnsatteContainer"
import styled from "styled-components"


const AnsatteTittel = styled.h2`

`

const Line = styled.div`
    margin: 50px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 40px auto;
    }
    border-bottom: solid grey 1px;
`




const Kontor = ({match}) => {
    const data = require('../data/dataKontor.json');
    let officeData = "empty"
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data[i].Kontor.length;j++){
            if(data[i].Kontor[j].navn.replace(/ /g,'') === match.params.navn)officeData=data[i].Kontor[j]
        }

    }
    const [artikkel,setArtikkel] = useState({
        tittel:"Velkommen til Rørlegger"+officeData.navn,
        innhold:officeData.om
    })
    
    

    return(
        <div>
            <Header ActiveItem="kontorer"></Header>
            <ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Velkommen til FG Rørleggerservice AS" Width="Full"></ImageCard>
            <Article artikkel={artikkel}></Article>
            <AnsatteTittel></AnsatteTittel>
            <AnsatteContainer ansatte={officeData.ansatte}></AnsatteContainer>
            <Line />
            <a href={"/tel:"+officeData.nummer}><ImageCard noBottomMargin={true} fit={true} imgSource={telefon} TextColor="black" Content={"Kontakt oss på "+officeData.nummer} Width="Full"></ImageCard></a>
            <Footer></Footer>
        </div>
        )

}


export default Kontor