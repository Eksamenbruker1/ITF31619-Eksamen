import React, { useEffect ,useState} from "react"
import styled from "styled-components"

const Wrapper = styled.article`
    display:flex;
    flex-direction:column;
    margin: 40px;
    margin-top: 80px;

`

const Heading = styled.h2`
    font-size:200%;
    color: black;
`
const Tekst = styled.p`

    
`

const Article = ({artikkel}) => {
    

    return(
        <Wrapper>
            <Heading>{artikkel.tittel}</Heading>
            <Tekst>{artikkel.innhold}</Tekst>
        </Wrapper>
    )

}


export default Article