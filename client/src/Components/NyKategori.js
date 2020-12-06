import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Styles/styles.css"



const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 auto;
`


const NyKategori = () => {

    return(
        <Wrapper>
            <Form.Row className="kat">
                <Form.Group controlId="formGridState">
                <Form.Label>Kategori</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button className="katBut">Ny</Button>
        </Wrapper>
        )

}


export default NyKategori


                            