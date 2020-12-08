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
    const [avsnittContent,setAvsnitt] = useState()
    const [forfatter,setForfatter] = useState()
    const [kategori,setKategori] = useState()
    const [valgtKategori,setValgtKategori] = useState()
    const [valgtForfatter,setValgtForfatter] = useState()

    const artikkelNavn = match.params.artikkel&&match.params.artikkel
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/articles/`+match.params.artikkel)
            res.data && !artikkel &&setArtikkel(res.data)
            res.data && !avsnittContent &&setAvsnitt(res.data.content.split(":"))
            res.data && !forfatter &&setForfatter(res.data.author)
            res.data && !tittel &&setTittel(res.data.title)
            //res.data && !kategori &&setKategori(res.data.category)

            
            const res2 = await axios.get(`http://localhost:5000/api/v1/categories/`);
            const objectForLoop = res2.data&& !kategori&&(res2.data)
            let categoryList = []
            console.log(res2.data)
            console.log(res2.data)
            if(res.data && !kategori){
            for(let i = 0;i< objectForLoop.length;i++){
                    categoryList.push(objectForLoop[i].CategoryName)
                }
                setKategori(categoryList)
            }
            
            
          } catch (error) {
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
    }, []); 



    let staticAvsnitt = ""
    let staticForfatter = ""
    let staticKategori = ""
    let staticTittel = ""

    if(avsnittContent && staticAvsnitt      ==="")
        staticAvsnitt   = avsnittContent
    if (forfatter && staticForfatter ==="") 
        staticForfatter = forfatter
    if(kategori && staticKategori   ==="") 
        staticKategori  =  kategori
    if(tittel && staticTittel   ==="") 
        staticTittel  =  tittel

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

        let articleContenColonSeparated =""

        for(let i = 0; i < activeAvsnitt.length;i++){
            if(activeAvsnitt[i]){
            articleContenColonSeparated+=":"+avsnittContent[i]
            }
        }
        console.log(data._id.$oid)
        data.title = tittel&&tittel
        data.content = articleContenColonSeparated!==""&&articleContenColonSeparated.substring(1);
        data.category = valgtKategori;



        const res =  await axios.put('http://localhost:5000/api/v1/articles/'+data._id.$oid,data).then(res => {
            console.log(res);
            console.log(res.data);
        })
        


    }

    return(
            <Outer>
            <Header back={true} adressen={"oppdater-fagartikkel"} ActiveItem="fagartikler"></Header>
            <ImageCard imgSource={banner}TextColor="#1e1e1e" Content="Oppdater Artikkel" Width="Full"></ImageCard>
            <Line />
            <CMS søk={artikkelNavn}/>
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

                                            <InputForm active={activeAvsnitt[index]} id={index} changeAvsnitt={changeAvsnitt} content={staticAvsnitt[index]}></InputForm>
                                            
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
                            Create
                        </Button>
                    </Form>
            </Wrapper>
            <Footer></Footer>
            </Outer>
        )

}


export default OppdaterFagartikkel