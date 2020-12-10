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
    margin:7px;
    font-size:150%;
    margin-top:20px;
    @media only screen and (max-width: 500px){
        font-size:130%;
    }
    margin-bottom: -27px;
    color:#000000;
    opacity: 1;
`;

const Tekst = styled.nav`

`;

const BigHeading = styled.h2`
    font-size:250%;
    margin:25px 15px 10px 10px;
    @media only screen and (max-width: 500px){
        font-size:200%;
    }
`;

const Enlarge = styled.span`
    font-size: 90%;
    
`;

const DivText = styled.div`
    margin: 0 auto;
    display: flex;
    width: 50%;
    max-width:500px;
    @media only screen and (max-width: 500px){
        width: 80%;
    }
    justify-content:space-around;
    
`;

const Button = styled.p`
    font-size:130%;
    padding:4px;
    @media only screen and (max-width: 500px){
        font-size:90%;
    }
    margin:5px;
    border-radius:6px;
    color: ${props => props.active};
    :hover{
        color: black;

    }

`;

const Div = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 60px;
    max-width:${props => props.burst?"500px":"100px"};
    padding:6px;
    cursor:pointer;
    color:#ffffff;
    border-radius:7px;
    background-color:#0078d7;
    justify-content:space-between;

`;



const Kontorer = () => {
    const data = require('../data/dataKontor.json');
    
    const [activeCity,setActiveCity] = useState()
    const [viewType, setViewType] = useState(true)
    const [categories,setCategories] = useState([true,true,true,true])

    const [state,setState] = useState(data)

    const handleList = (event)=>{
        setViewType(!event)
    }

    const handleCategoryList = (index)=>{
        const newState = categories;
        categories[index]=(!categories[index])
        handleCategory()
    }

    const handleCategory = (event)=>{
        const newData = []
        for(let i =0;i < data.length;i++){
             if(categories[i])newData.push(data[i])
             console.log(data[i])
        }
        setState(newData)
        console.log("--------------Gris-------------------")
        console.log("--------------------------------------------------")
        console.log(state)
    }
    
    
    
    
    return(
            <Wrapper>
                <Header ActiveItem="kontorer"></Header>
                <ImageCard imgSource={banner} TextColor="#1e1e1e" Content="Våre Kontorer" Width="Full"></ImageCard>
                <Line />
                    <Div style={{display:"flex"}}> 
                        <Button color={viewType?"white":"black"} viewType={viewType} onClick={()=>handleList(true)}>
                            ☐
                        </Button>
                        <Button color={!viewType?"white":"black"} onClick={()=>handleList(false)}>
                            ≡
                        </Button>
                    </Div>
                    <Div burst={true} style={{display:"flex"}}>
                        {categories&&categories.map((valg,index)=>(<Button color={!categories[index]?"white":"black"}  onClick={()=>handleCategoryList(index)} >{data[index].By}</Button>))}
                    </Div>
                    <DivText>
                        {state.map((city,index)=>(
                            <> 
                                <p>{city.By}</p>
                            </>
                        ))}
                    </DivText>
                   
                    {state.map((city,index)=>(
                            <> 
                                {index===0&&(<BigHeading>Velg et kontor <Enlarge>⤵</Enlarge></BigHeading>)}
                            </>
                        ))}
                    
                
                {state.map((city,index)=>(
                    <>  {console.log(categories[index])}
                        
                        <Title>{city.By+" ("+city.Kontor.length+" kontorer)"}</Title>
                        <SimpleCardContainer viewType={viewType} setActiveCity={setActiveCity} data={city}></SimpleCardContainer>
                    </>
                ))}
                
                <Footer style={{marginTop:"50px;"}}></Footer>
            </Wrapper>
       
        )

}


export default Kontorer