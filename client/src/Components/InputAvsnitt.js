import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';


const Input = styled.textarea`
    margin:0 auto;
    border-radius:2px;
    width:100%;
    border: 1px grey solid;
    padding: 7px;
`

const InputAvsnitt = ({avsnitt,changeAvsnitt,id}) => {
    const value = avsnitt;

    return(
        <Input onChange={(e) => { changeAvsnitt(e.target.value,id)}} defaultValue={value}>
            
        </Input>
        )

}


export default InputAvsnitt