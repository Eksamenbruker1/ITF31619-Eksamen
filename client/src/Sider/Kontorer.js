import React, { useContext, useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import SimpleCardContainer from "../Components/SimpleCardContainer"
import banner from "../img/office.gif"
import styled from "styled-components"


const Wrapper = styled.nav`

`;

const Title = styled.h3`
    margin:20px;
    font-size:170%;
    @media only screen and (max-width: 500px){
        font-size:130%;
    }
    color:#000000;
`;

const Tekst = styled.nav`

`;

const Kontorer = () => {
    const data = require('../data/dataKontor.json'));
    const [state,setState] = useState(data)
    const [activeCity,setActiveCity] = useState()

    const hoverTrigger = (city)=>{
        setActiveCity(city)
    }

    
    return(
            <Wrapper>
                <Header ActiveItem="kontorer"></Header>
                <ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Våre Kontorer" Width="Full"></ImageCard>
                {state.map((city)=>(
                    <>  {}
                        <Title>{city.By+" ("+city.Kontor.length+" kontorer)"}</Title>
                        <SimpleCardContainer setActiveCity={setActiveCity} data={city}></SimpleCardContainer>
                    </>
                ))}
                
                <Footer></Footer>
            </Wrapper>
       
        )

}


export default Kontorer