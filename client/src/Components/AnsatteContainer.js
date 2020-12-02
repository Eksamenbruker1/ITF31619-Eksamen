import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import AnsattCard from "./AnsattCard"


const Wrapper = styled.section`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    display:grid;
    width: 100%;
    margin: 40px;
    column-gap: 15px;
    @media only screen and (max-width: 800px){
        grid-template-columns: 1fr 1fr 1fr; 
    }
    row-gap: 15px;

`;

const AnsatteContainer = ({ansatte}) => {
    return(
        <Wrapper> 
            {ansatte.map((ansatt)=><AnsattCard ansatt={ansatt}/>)}
        </Wrapper>
        )

}


export default AnsatteContainer