import React, { useContext, useEffect ,useState} from "react"
import Header from "../Components/Header"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import SimpleCardContainer from "../Components/SimpleCardContainer"
import banner from "../img/officeBanner.png"
import styled from "styled-components"


const Wrapper = styled.nav`

`;

const Title = styled.h3`
    margin:20px;
    font-size:170%;
    color:#000000;
`;

const Tekst = styled.nav`

`;

const Kontorer = () => {
    
    const data = require('../data/dataKontor.json');
    const [state,setState] = useState(data)
    
    return(
       
            <Wrapper>
                <Header ActiveItem="Kontorer"></Header>
                <ImageCard imgSource={banner} TextColor="black" Content="Våre Kontorer" Width="Full"></ImageCard>
                {state.map((city)=>(
                    <>
                        <Title>{city.By+" ("+city.Kontor.length+" kontorer)"}</Title>
                        <SimpleCardContainer data={city}></SimpleCardContainer>
                    </>
                ))}
                
                <Footer></Footer>
            </Wrapper>
       
        )

}


export default Kontorer