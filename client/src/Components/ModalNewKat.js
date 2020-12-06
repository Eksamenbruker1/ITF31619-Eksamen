import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';


const Wrapper = styled.div`
    margin:0 auto;
`
const Input = styled.input`
    
`

const Tag = styled.p`
    color: black;
    
`

const ModalNewKat = () => { 
    

    return(
        <Wrapper>
            <Tag>NY KATEGORI</Tag><Input></Input>
        </Wrapper>
        )

}


export default ModalNewKat