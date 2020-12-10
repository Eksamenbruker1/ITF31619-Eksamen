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

const Line = styled.div`
    margin: 35px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 40px auto;
    }
    border-bottom: solid grey 1px;
    margin-bottom: 70px;
`

const Title = styled.h3`
    margin:20px;
    font-size:170%;
    @media only screen and (max-width: 500px){
        font-size:130%;
    }
    color:#000000;
    opacity: 1;
`;

const Tekst = styled.nav`

`;

const BigHeading = styled.h2`
    font-size:250%;
    margin:5px 15px 10px 10px;
`;

const Enlarge = styled.span`
    font-size: 90%;
    
`;

const Button = styled.button`

`;

const Kontorer = () => {
    const data = require('../data/dataKontor.json');
    const [state,setState] = useState(data)
    const [activeCity,setActiveCity] = useState()
    const [viewType, setViewType] = useState(true)

    const hoverTrigger = (city)=>{
        setActiveCity(city)
    }

    const handleList = ()=>{
        console.log(viewType)
        setViewType(!viewType)
        
    }
    
    
    
    return(
            <Wrapper>
                <Header ActiveItem="kontorer"></Header>
                <ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Våre Kontorer" Width="Full"></ImageCard>
                <Line />
                <Button onClick={()=>handleList()}>
                    CLickme
                </Button>
                {state.map((city)=>(
                    <> 
                        <BigHeading>Velg et kontor <Enlarge>⤵</Enlarge></BigHeading>
                        <Title>{city.By+" ("+city.Kontor.length+" kontorer)"}</Title>
                        <SimpleCardContainer viewType={viewType} setActiveCity={setActiveCity} data={city}></SimpleCardContainer>
                        <Line />
                        
                    </>
                ))}
                
                <Footer></Footer>
            </Wrapper>
       
        )

}


export default Kontorer