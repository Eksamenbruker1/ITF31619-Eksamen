import React, { useEffect ,useState} from "react"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import banner from "../img/jobb.jpg"
import telefon from "../img/telefon.gif"
import props from 'prop-types';
import { Router, Link, useHistory,useParams} from 'react-router-dom';
import Article from "../Components/Article"
import AnsatteContainer from "../Components/AnsatteContainer"
import styled from "styled-components"
import axios from "axios"


const Main = styled.main`
    margin: 30px auto;
    width: 70%;
`

const Ingress = styled.p`
    margin-top:15px;
    font-size:115%;
    font-weight:500;
    width:90%;
    margin-bottom:40px;
`

const Avsnitt = styled.p`
    font-size:135%;
`

const Title = styled.h1`
    font-size:230%;
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

    const [artikler, setArtikler] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log(`http://localhost:5000/api/v1/articles/`+match.params.artikkel)
  
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/articles/`+match.params.artikkel)
            res.data && !artikler &&setArtikler(res.data)
            
          } catch (error) {
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
    }, []); 


    return(
        <div>
            <Header ActiveItem="kontorer"></Header>
            <ImageCard imgSource={banner} TextColor="#1e1e1e"  Width="80%"></ImageCard>
            <Main>
                <article>
                    <Title>{artikler.title}</Title>
                    <Ingress>{artikler.ingress}</Ingress>
                    <Avsnitt>{artikler.content}</Avsnitt>
                </article>
            </Main>

            <Line />
            <Footer></Footer>
        </div>
        )

}


export default Fagartikkel