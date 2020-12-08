import React, { useEffect ,useState} from "react"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import styled from "styled-components"
import banner from "../img/jobbe.gif"
import CMS from "../Components/CMS"
import NyKategori from "../Components/NyKategori"
import Alert from "../Components/Alert"
import InputAvsnitt from "../Components/InputAvsnitt"
import "../Components/Styles/styles.css"
import axios from "axios"
import articleService from "../Components/utils/articleService"

const Wrapper = styled.div`
    width: 65%;
    margin: 0 auto;
    @media only screen and (max-width: 800px){
        width: 90%;
        margin-bottom: 30px;
    }
`;
const Outer = styled.div`
    width: 100%;
    margin: 0 auto;
`;


const Line = styled.div`
    margin: 50px auto;
    width: 60%;
    @media only screen and (max-width: 800px){
        width: 80%;
        margin: 40px auto;
    }
    border-bottom: solid grey 1px;
`

const Div = styled.div`
    display: flex;
    justify-content:space-between;
`

const OppdaterFagartikkel = ({match}) => {
    const [visibility, setVisibility] = useState(false);
    const nyKategori = (state)=>{
        setVisibility(state)
    }
    const [artikkel, setArtikkel] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeAvsnitt,setActiveAvsnitt] = useState([true,true,true,true,true])
    const [avsnittContent,setAvsnitt] = useState()
    const [forfatter,setForfatter] = useState()
    const [kategori,setKategori] = useState()
    let staticAvsnitt = ""
    let staticForfatter = ""
    let staticKategori = ""
    const artikkelNavn = match.params.artikkel&&match.params.artikkel
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/articles/`+match.params.artikkel)
            res.data && !artikkel &&setArtikkel(res.data)
            res.data && !avsnittContent &&setAvsnitt(res.data.content.split(":"))
            res.data && !forfatter &&setForfatter(res.data.author)
            res.data && !kategori &&setKategori(res.data.author)
          } catch (error) {
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
    }, []); 
    if(avsnittContent && staticAvsnitt      ==="")
        staticAvsnitt   = avsnittContent
    if (forfatter && staticForfatter ==="") 
        staticForfatter = forfatter
    if(forfatter && staticKategori   ==="") 
        staticKategori  =  kategori

    const ActivateAvsnitt = (index)=>{
        if(avsnittContent[index].length < 1){
            const fAvsnitt = activeAvsnitt
            const value = false
            fAvsnitt[index]  = value
            setActiveAvsnitt(fAvsnitt)
            console.log(activeAvsnitt)
        }else{
            const fAvsnitt = activeAvsnitt
            const value = true
            fAvsnitt[index]  = value
            setActiveAvsnitt(fAvsnitt)
            console.log(activeAvsnitt)
        }

    }

    const changeAvsnitt = (changedAvsnitt,index) =>{
        let insert =avsnittContent
        insert[index] = changedAvsnitt
        if(avsnittContent)
        setAvsnitt(insert)
        console.log(index+" "+changedAvsnitt)
        ActivateAvsnitt(index)
    }

    const FormFunct = () =>{
        let dummyObject = {
            "_id":{"$oid":"5fce51385437c60e1c218ace"},
            "secret":true,
            "title":"Vi tilbyr beste hemmelige badet for beste pris 1",
            "ingress":"Et beskrivende ingress for artikkelen er det her ja. Meget kult.",
            "content":"En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut",
            "author":"Lars Larsen",
            "category":{"$oid":"5fce50e45437c60e1c218acd"},
            "user":{"$oid":"5fce504c5437c60e1c218ac5"},
            "createdAt":{"$date":{"$numberLong":"1607356728528"}},
            "updatedAt":{"$date":{"$numberLong":"1607356728528"}},
            "slug":"vi-tilbyr-beste-hemmelige-badet-for-beste-pris-1","__v":{"$numberInt":"0"}
        }

        const articleContenColonSeparated =""
        activeAvsnitt.map((avsnitt,index)=>articleContenColonSeparated+=avsnitt&&avsnittContent[index])
        console.log(articleContenColonSeparated)
    }

    return(
            <Outer>
            <Header back={true} adressen={"oppdater-fagartikkel"} ActiveItem="fagartikler"></Header>
            <ImageCard imgSource={banner}TextColor="#1e1e1e" Content="Oppdater Artikkel" Width="Full"></ImageCard>
            <Line />
            <CMS søk={artikkelNavn}/>
            <Line />
            <Wrapper>
            <Form style={{padding: "50px", backgroundColor: "#fffeeb"}}>
                                        
                        {avsnittContent&&avsnittContent.map((avsnitt,index)=>(
                                        
                                        <Form.Group controlId="formGridAddress1">
                                            <Div id={index} onClick={()=>ActivateAvsnitt(index)} ><Form.Label >{"Avsnitt "+(index+1)}</Form.Label><Alert alert={true} /></Div>

                                            <InputAvsnitt activeAvsnitt={activeAvsnitt[index]} id={index} changeAvsnitt={changeAvsnitt} avsnitt={staticAvsnitt[index]}></InputAvsnitt>
                                            
                                        </Form.Group>
                                    ))}
                        <NyKategori nyKategori={nyKategori}>


                        </NyKategori>

                        <Form.Row>
                            <Form.Group controlId="formGridState">
                            <Div><Form.Label>Forfatter</Form.Label><Alert /></Div>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        
                        <Button onClick={()=>console.log(avsnittContent)} className="invert" variant="primary">
                            Create
                        </Button>
                    </Form>
            </Wrapper>
            <Footer></Footer>
            </Outer>
        )

}


export default OppdaterFagartikkel