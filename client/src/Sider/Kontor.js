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
            <Header ActiveItem="Kontorer"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Velkommen til FG Rørleggerservice AS" Width="Full"></ImageCard>
            <Article artikkel={artikkel}></Article>
            <AnsatteTittel></AnsatteTittel>
            <AnsatteContainer ansatte={officeData.ansatte}></AnsatteContainer>
            <ImageCard fit={true} imgSource={telefon} TextColor="black" Content={"Kontakt oss på "+officeData.nummer} Width="Full"></ImageCard>
            <Footer></Footer>
        </div>
        )

}


export default Kontor