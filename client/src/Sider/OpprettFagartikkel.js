import React, { useEffect ,useState} from "react"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import styled from "styled-components"
import banner from "../img/jobbe.gif"
import "../Components/Styles/styles.css"
import CMS from "../Components/CMS"
import NyKategori from "../Components/NyKategori"
import Alert from "../Components/Alert"
import ModalNewKat from "../Components/ModalNewKat"
import axios from "axios"
import InputForm from "../Components/InputForm"
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../Components/context/AuthProvider'; 

const Wrapper = styled.div`
    width: 65%;
    @media only screen and (max-width: 800px){
        width: 90%;
        margin-bottom: 30px;
    }
    margin: 0 auto;
    margin-top: 40px;
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


const OpprettFagartikkel = (bacdkAdress) => {

    const history = useHistory();
    
    const {user, setUser, isLoggedIn,isAdmin } = useAuthContext();

    console.log("Checking user object for Fagartikler")
    console.log(user)
    console.log(isLoggedIn)
    !isLoggedIn&&history.push('/login/opprett-fagartikkel');
  
    const [modal,setModal] = useState(false)
    const [antallAvsnitt, setAntallAvsnitt] = useState(["item"])
    const [visibility, setVisibility] = useState(false);

    const nyKategori = (state)=>{
        setVisibility(state)
    }

    //only love a real nigga knew was trap
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
    const [artikkelValg, setArtikkelValg] = useState()
    const [alleArtikler,setAlleArtikler] = useState()

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/articles/`)
            res.data.data[1] && !forfatter &&setForfatter(res.data.author)
            res.data.data[1].id && setId(res.data.id)
            res.data.data[1] && !artikkel &&setArtikkel(res.data)
            res.data.data[1] && !avsnittContent &&setAvsnitt(res.data.content.split(":"))
            res.data.data[1] && !tittel &&setTittel(res.data.title)
           
            const res2 = await axios.get(`http://localhost:5000/api/v1/categories/`);
            res2.data&& !kategori&& setKategori(res2.data)
            const res3 = await axios.get(`http://localhost:5000/api/v1/articles/`)
            res3.data && !alleArtikler &&setAlleArtikler(res.data.data)
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


    const leggTilAvsnitt = (item) =>{ 
        setAntallAvsnitt([...antallAvsnitt,item])
    }

    const fjernAvsnitt = (item) =>{ 
        setAntallAvsnitt(antallAvsnitt.slice(0, -1))
    }

    const ActivateAvsnitt = (index)=>{
        if(avsnittContent[index] === ""){
            const fAvsnitt = activeAvsnitt
            const value = false
            fAvsnitt[index]  = value

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
                "title": "slett denne",
                "ingress": "Et beskrivende ingress for artikkelen er det her ja. Meget kult.",
                "content": "En utfyllende artikkel som tar og gir deg bakoversveis. Helt utrolig og veldig viktig at artikkelen er lengre enn ingressen hvis ikke så hadde dette vært flaut",
                "author": "Lars Larsen",
                "secret": "false",
                "category": "5fce50e45437c60e1c218acd"
        }

        let articleContenColonSeparated =""

        for(let i = 0; i < activeAvsnitt.length;i++){
            if(activeAvsnitt[i]){
            articleContenColonSeparated+=":"+avsnittContent[i]
            }
        }

        data.title = tittel&&tittel
        data.content = articleContenColonSeparated!==""&&articleContenColonSeparated.substring(1);
        data.category = valgtKategori;
        data.id = id;
        let slug = ""
        data.title.split(" ").map((word)=>slug+=word+"-")
        data.slug = slug.slice(0, -1).toLowerCase();
     

        const res =  await axios.post('http://localhost:5000/api/v1/articles/'+id,data).then(res => {
           
        })
        


    }

    return(
            <Outer>
                <Header back={true} adressen={"opprett-fagartikkel"} ActiveItem="fagartikler"></Header>
                <ImageCard imgSource={banner}TextColor="#1e1e1e" Content="Ny Artikkel" Width="Full"></ImageCard>
                <Line />
                <CMS />
                <Line />
                <Wrapper>
                    {modal&& (<ModalNewKat setModal={setModal}></ModalNewKat>)}
                    <Form style={{padding: "50px", backgroundColor: "#fffeeb"}}>
                            <Form.Group controlId="formGridAddress1">
                                <Div><Form.Label>Tittel</Form.Label><Alert alert={true} /></Div>
                                <InputForm content={tittel} active={tittel?true:false} changeTittel={changeTittel} ></InputForm>
                            </Form.Group>
                            
                            {antallAvsnitt.length>0&&antallAvsnitt.map((avsnitt,index)=>
                                <Form.Group controlId="formGridAddress1">
                                    <Div><Form.Label>Avsnitt {index+1}</Form.Label><Alert alert={true} /></Div>
                                    <InputForm leggTilAvsnitt={leggTilAvsnitt} active={activeAvsnitt[index]} id={index} changeAvsnitt={changeAvsnitt} content={staticAvsnitt[index]}></InputForm>
                                </Form.Group>
                            )}
                            
                    

                            {antallAvsnitt.length < 5 &&(
                            <Button onClick={()=>leggTilAvsnitt("item")} style={{margin: "20px"}}>
                                Legg til nytt avsnitt +
                            </Button>
                            )}

                            {antallAvsnitt.length > 1 &&(
                            <Button onClick={()=>fjernAvsnitt("item")} style={{backgroundColor:"red",border:"none"}}>
                                Fjern Avsnitt
                            </Button>
                            )}

                            <NyKategori setValgtKategori={setValgtKategori}  categoryList={kategori&&kategori}  setModal={setModal} modal={modal}>


                            </NyKategori>

                            <Form.Row>
                            <Form.Group controlId="formGridState">
                            <Div><Form.Label>Forfatter</Form.Label><Alert /></Div>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option value={"Lars Larsen"}>Lars Larsen</option>
                                <option value={"Kåre Kåresen"}>Kåre Kåresen</option>
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


export default OpprettFagartikkel