import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {BrowserRouter as Link}  from 'react-router-dom';


const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    padding: 20px;
    justify-content: space-between;
    height: 200px;
    width: 100%;
    border: 3px solid rgba(225, 119, 37, 1);
`

const Input = styled.input`
    margin-left: 30%;
    max-width: 200px;
`

const Background = styled.div`
    background-color: rgba(225, 119, 37, 0.8);
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    bottom:0;
    left:0;
    width: 100%;
`

const Tag = styled.h5`
    font-size:190%;
    font-weight:300;
    margin-left: 30%;
`
const TagClick = styled.p`
    margin-left: 30%;
    font-size: 150%;
    font-weight: 700;
    cursor: pointer;
`


const ModalNewKat = ({setModal,modal}) => { 
    

    return(
        <Background>
            <Wrapper>
                <Tag>NY KATEGORI</Tag><Input></Input><TagClick style={{cursor:"pointer"}} onClick={()=>setModal(modal&&false)}>Lukk</TagClick>
            </Wrapper>
        </Background>
        )

}


export default ModalNewKat