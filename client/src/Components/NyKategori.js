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


const NyKategori = ({setModal,modal,categoryList,setValgtKategori}) => {
    let kategorier = []
    kategorier = categoryList&&categoryList
    const [state, setState] = useState(false)


    return(
        <Wrapper onClick={()=>setState(true)}>
            <Form.Row className="kat">
                <Form.Group controlId="formGridState">
                <Form.Label>Kategori</Form.Label>
                <Form.Control onChange={(e) => { setValgtKategori(e.target.value)}} as="select" defaultValue="Choose...">
                {state && kategorier!==[]&&kategorier.map(
                    (category)=>(<option value={category}>{category}</option>)
                )}
                </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button id={modal&&"katbtn"} className="katBut" onClick={()=>setModal(!modal?true:false)}>{modal?"Lukk":"Ny"}</Button>
        </Wrapper>
        )

}


export default NyKategori


                            