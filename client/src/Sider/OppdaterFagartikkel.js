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
import ForfatterValg from "../Components/ForfatterValg"
import InputForm from "../Components/InputForm"
import "../Components/Styles/styles.css"
import axios from "axios"
import articleService from "../Components/utils/articleService"
import ModalNewKat from "../Components/ModalNewKat"

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

    const [antallAvsnitt, setAntallAvsnitt] = useState(["item"])
    const [modal,setModal] = useState(false)
    const [visibility, setVisibility] = useState(false);

    const nyKategori = (state)=>{
        setVisibility(state)
    }

    const [artikkel, setArtikkel] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [activeAvsnitt,setActiveAvsnitt] = useState([true,true,true,true,true])

    const [tittel,setTittel] = useState()
    const [id,setId] = useState()
    const [avsnittContent,setAvsnitt] = useState()
    const [forfatter,setForfatter] = useState()
    const [kategori,setKategori] = useState()
    const [valgtKategori,setValgtKategori] = useState()
    const [alleArtikler,setAlleArtikler] = useState()
    

    const artikkelNavn = match.params.artikkel&&match.params.artikkel
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/articles/`+match.params.artikkel)
            res.data && !forfatter &&setForfatter(res.data.author)
            res.data.id && setId(res.data.id)
            res.data && !artikkel &&setArtikkel(res.data)
            res.data && !avsnittContent &&setAvsnitt(res.data.content.split(":"))
            res.data && !tittel &&setTittel(res.data.title)
            //res.data && !kategori &&setKategori(res.data.category)    
            const res2 = await axios.get(`http://localhost:5000/api/v1/categories/`);
            res2.data&& !kategori&& setKategori(res2.data)
            const res3 = await axios.get(`http://localhost:5000/api/v1/articles/`)
            res3.data && !alleArtikler &&setAlleArtikler(res.data.data)
          } catch (error) {
          } finally {
            avsnittContent && avsnittContent.length!==antallAvsnitt.length && setAntallAvsnitt([antallAvsnitt,"item"])
            setIsLoading(false);
          }
        }
        fetchData();
    }, []); 
    
    
    
    let staticAvsnitt = ""
    let staticForfatter = ""
    let staticKategori = ""
    let staticTittel = ""
    let staticAlleArtikler = ""

    if(avsnittContent && staticAvsnitt      ==="")
        staticAvsnitt   = avsnittContent
    if (forfatter && staticForfatter ==="") 
        staticForfatter = forfatter
    if(kategori && staticKategori   ==="") 
        staticKategori  =  kategori
    if(tittel && staticTittel   ==="") 
        staticTittel  =  tittel
    if(alleArtikler && staticAlleArtikler   ==="") 
        staticAlleArtikler  =  alleArtikler

    const ActivateAvsnitt = (index)=>{
        if(avsnittContent[index] === ""){
            const fAvsnitt = activeAvsnitt
            const value = false
            fAvsnitt[index]  = value
            console.log(fAvsnitt)
            setActiveAvsnitt(fAvsnitt)
        }else{
            const fAvsnitt = activeAvsnitt
            const value = true
            fAvsnitt[index]  = value
            setActiveAvsnitt(fAvsnitt)
        }

    }

    const changeTittel = (changedTitle) =>{
        let insert =changedTitle
        setTittel(insert)
    }

    const leggTilAvsnitt = (item) =>{ 
        if(antallAvsnitt >= 5)return
        setAvsnitt(...avsnittContent,item)
        setAntallAvsnitt([...antallAvsnitt,"item"])
    }
    

    const changeAvsnitt = (changedAvsnitt,index) =>{
        let insert =avsnittContent
        insert[index] = changedAvsnitt
        setAvsnitt(insert)
        let transformActive = activeAvsnitt
        changedAvsnitt.length<1&&ActivateAvsnitt(index)
        changedAvsnitt.length>1&&ActivateAvsnitt(index)
    }

    const FormFunct = async () =>{
        let data = {
            "title":"Vi tilbyr beste hemmelige badet for beste pris 1",
            "ingress":"Et beskrivende ingress for artikkelen er det her ja. Meget kult.",
            "content":"En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut:En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut",
            "author":"Lars Larsen",
            "slug": "vi-tilbyr-beste-badet-for-beste-pris-1",
            "category":"id"
        }

        let articleContenColonSeparated =""

        for(let i = 0; i < avsnittContent.length;i++){
            articleContenColonSeparated+=":"+avsnittContent[i]
        }
        console.log(articleContenColonSeparated)

        data.title = tittel&&tittel
        data.content = articleContenColonSeparated!==""&&articleContenColonSeparated.substring(1);
        data.category = valgtKategori;
        data.id = id;
        let slug = ""
        data.title.split(" ").map((word)=>slug+=word+"-")
        data.slug = slug.slice(0, -1).toLowerCase();
     

        const res =  await axios.put('http://localhost:5000/api/v1/articles/'+id,data).then(res => {
            console.log(res.data)
        })
        

    }

    return(
            <Outer>
            <Header back={true} adressen={"oppdater-fagartikkel"} ActiveItem="fagartikler"></Header>
            <ImageCard imgSource={banner}TextColor="#1e1e1e" Content="Oppdater Artikkel" Width="Full"></ImageCard>
            <Line />
            <CMS alleArtikler={alleArtikler} søk={artikkelNavn}/>
            <Line />
            <Wrapper>
            {modal&& (<ModalNewKat setModal={setModal}></ModalNewKat>)}
            <Form style={{padding: "50px", backgroundColor: "#fffeeb"}}>
                                        <Form.Group controlId="formGridAddress1">
                                            <Div><Form.Label>Tittel</Form.Label><Alert alert={true} /></Div>

                                            <InputForm content={tittel} active={tittel?true:false} changeTittel={changeTittel} ></InputForm>
                                            
                                        </Form.Group>
                                        
                        {avsnittContent&&avsnittContent.map((avsnitt,index)=>(
                                        
                                        <Form.Group controlId="formGridAddress1">
                                            <Div id={index} onClick={()=>ActivateAvsnitt(index)} ><Form.Label >{"Avsnitt "+(index+1)}</Form.Label><Alert alert={true} /></Div>

                                            <InputForm leggTilAvsnitt={leggTilAvsnitt} active={activeAvsnitt[index]} id={index} changeAvsnitt={changeAvsnitt} content={staticAvsnitt[index]}></InputForm>
                                            
                                        </Form.Group>

                                    ))}

                   


                        <NyKategori setValgtKategori={setValgtKategori}  categoryList={kategori&&kategori}  setModal={setModal} modal={modal}>
                        
                        </NyKategori>

                        

                        <Form.Row>
                            <Form.Group controlId="formGridState">
                            <Div><Form.Label>Forfatter</Form.Label><Alert /></Div>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option value={forfatter}>{forfatter}</option>

                            </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        
                        <Button onClick={()=>FormFunct()} className="invert" variant="primary">
                            Oppdater
                        </Button>
                    </Form>
            </Wrapper>
            <Footer></Footer>
            </Outer>
        )

}


export default OppdaterFagartikkel