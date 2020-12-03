import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import jonnhy from "../img/jonnhy.jpg"


const Wrapper = styled.article`
    width: 100%;
    
`;

const Image= styled.img`
    width:100%;
    
`;

const Text = styled.p`
    margin: 2px;
    
`;

const AnsattCard= ({ansatt}) => {

    return(
        <Wrapper > 
            <Image src={jonnhy}></Image>
            <Text>{ansatt.navn}</Text>
            <Text>{ansatt.stilling}</Text>
            <Text>{ansatt.alder+" år gammel"}</Text>
        </Wrapper>
        )

}


export default AnsattCard