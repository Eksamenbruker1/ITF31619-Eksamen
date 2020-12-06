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
import "../Components/Styles/styles.css"

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
    const artikkelNavn = match.params.artikkel&&match.params.artikkel
    
    return(
            <Outer>
            <Header back={true} adressen={"oppdater-fagartikkel"} ActiveItem="fagartikler"></Header>
            <ImageCard imgSource={banner}TextColor="#1e1e1e" Content="Oppdater Artikkel" Width="Full"></ImageCard>
            <Line />
            <CMS søk={artikkelNavn}/>
            <Line />
            <Wrapper>
            <Form style={{padding: "50px", backgroundColor: "#fffeeb"}}>
                        <Form.Group controlId="formGridAddress1">
                            <Div><Form.Label>Avsnitt 1</Form.Label><Alert alert={true} /></Div>
                            <Form.Control placeholder="Skriv her..." />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Div><Form.Label>Avsnitt 2</Form.Label><Alert alert={true} /></Div>
                            <Form.Control placeholder="Skriv her..." />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Div><Form.Label>Avsnitt 3</Form.Label><Alert alert={true} /></Div>
                            <Form.Control placeholder="Skriv her..." />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Div><Form.Label>Avsnitt 4</Form.Label><Alert alert={true} /></Div>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Div><Form.Label>Avsnitt 5</Form.Label><Alert alert={true} /></Div>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <NyKategori>

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

                        
                        <Button className="invert" variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
            </Wrapper>
            <Footer></Footer>
            </Outer>
        )

}


export default OppdaterFagartikkel