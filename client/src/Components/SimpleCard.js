import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import { Router, Link, useHistory, useLocation} from 'react-router-dom';
import Routes from "../Routes/Routes"



const Wrapper = styled.nav`
    border:solid 1px #cecece;
    max-width: 80%;
    padding: 5px;
`;

const Title = styled.h3`
    font-size:135%;
`;

const Tekst = styled.p`
    font-size:75%;
`;


const SimpleCard =  (office,{location}) => {
    let history = useHistory();
    //Haha, se så performance-vennlig dette er
    const navn = office.data.navn.replace(/\s+/, "").replace(/\s+/, "").replace(/\s+/, "").replace(/\s+/, "")

    const funct = ()=>{
        //history.push(`/kontor`, {state:{navn:office.data.navn} })
    }


    return(
        <Wrapper> 
            <Link to={'/kontor/'+navn}><Title onClick={()=>funct()}>{office.data.navn}</Title></Link>
            <Tekst>{office.data.gate}</Tekst>
            <Tekst>{office.data.nummer}</Tekst>
            <Tekst>{office.data.epost}</Tekst>
        </Wrapper>
        )

}


export default SimpleCard