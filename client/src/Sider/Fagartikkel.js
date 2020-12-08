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
import axios from "axios"


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




const Fagartikkel = ({match}) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    
    useEffect(() => {
        async function fetchData() {
          try {
            const result = await axios.get(`http://localhost:5000/api/v1/articles/`+match.params.artikkel);
            !data&&setData(result.data.data);
          } catch (error) {
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
      }, []); 
    console.log(data)
    let officeData = "empty"
    
    const [artikkel,setArtikkel] = useState({
        tittel:"Velkommen til Rørlegger"+officeData.navn,
        innhold:officeData.om
    })

    console.log(data)
    console.log(match.params.artikkel)

    return(
        <div>
            <Header ActiveItem="kontorer"></Header>
            <ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Velkommen til FG Rørleggerservice AS" Width="Full"></ImageCard>
            <Article artikkel={artikkel}></Article>
            <AnsatteTittel></AnsatteTittel>
            
            <Line />
            <a href={"/tel:"+officeData.nummer}><ImageCard noBottomMargin={true} fit={true} imgSource={telefon} TextColor="black" Content={"Kontakt oss på "+officeData.nummer} Width="Full"></ImageCard></a>
            <Footer></Footer>
        </div>
        )

}


export default Fagartikkel