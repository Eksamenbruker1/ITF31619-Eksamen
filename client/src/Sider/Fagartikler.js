import React, { Component, useEffect ,useState} from "react"
import ArticleList from "../Components/ArticleList"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import Valg from "../Components/Valg"
import banner from "../img/artikler.gif"
import styled from "styled-components"
import axios from "axios"
import list from "../Components/utils/articleService"

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
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
          try {
            const result = await axios.get(`http://localhost:5000/api/v1/articles/`);
            setData(result.data.data);
          } catch (error) {
            alert("this poll does not exist");
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
      }, []); 

      

    return(
        <div>
            <Header ActiveItem="fagartikler"></Header>
            <a href="#main"><ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Fagartikler" Width="Full"></ImageCard></a>
            <Line />
            <Valg></Valg>
            <Line />
            <ArticleList data={data} id="main"/>
            <Footer></Footer>
        </div>
        )

}


export default Fagartikler