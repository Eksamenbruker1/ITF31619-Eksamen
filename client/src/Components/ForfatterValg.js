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


const ForfatterValg = ({authorList,setValgtForfatter}) => {
    let forfattere = []
    forfattere = authorList&&authorList
    const [state, setState] = useState(false)
    console.log(forfattere)

    return(
        <Wrapper onClick={()=>setState(true)}>
            <Form.Row className="kat">
                <Form.Group controlId="formGridState">
                <Form.Label>Forfatter</Form.Label>
                <Form.Control onChange={(e) => { setValgtForfatter(e.target.value)}} as="select" defaultValue="Choose...">
                {state && forfattere.length===1&&(
                    <option value={forfattere}>{forfattere}</option>)
                }
                </Form.Control>
                </Form.Group>
            </Form.Row>
        </Wrapper>
        )

}


export default ForfatterValg


                            