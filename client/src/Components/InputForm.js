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

const InputForm = ({content,changeAvsnitt,changeTittel,changeForfatter,changeKategori,id,active},leggTilAvsnitt) => {
    const value = content;

    console.log(".............................................hhh."+changeAvsnitt)
    console.log("..............................................hhhh,"+changeAvsnitt)

    const run=(value,id)=>{
        changeAvsnitt&&changeAvsnitt(value,id)
        changeTittel&&changeTittel(value)
        changeForfatter&&changeForfatter(value)
        changeKategori&&changeKategori(value)
    }
    
    

    return(
        <Input onChange={(e) => {leggTilAvsnitt("item")}}  active={active} onChange={(e) => { run(e.target.value,id)}} defaultValue={value}>
            
        </Input>
        )

}


export default InputForm