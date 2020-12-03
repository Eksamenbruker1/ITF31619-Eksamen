import React, { useEffect ,useState} from "react"
import GridContainer from "../Components/GridContainer"
import ImageCard from "../Components/ImageCard"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import styled from "styled-components"
import banner from "../img/jobbe.gif"


const Wrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const Outer = styled.div`
    width: 100%;
    margin: 0 auto;
`;


const OpprettFagartikkel = () => {

    return(
            <Outer>
            <Header back={true} ActiveItem="Hjem"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Ny Artikkel" Width="Full"></ImageCard>
            <Wrapper>
            <Form>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Avsnitt 1</Form.Label>
                        <Form.Control placeholder="Skriv her..." />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Avsnitt 2</Form.Label>
                        <Form.Control placeholder="Skriv her..." />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Avsnitt 3</Form.Label>
                        <Form.Control placeholder="Skriv her..." />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Avsnitt 4</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Avsnitt 5</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group controlId="formGridState">
                        <Form.Label>Kategori</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formGridState">
                        <Form.Label>Forfatter</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
            </Wrapper>
            <Footer></Footer>
        </Outer>
        )

}


export default OpprettFagartikkel