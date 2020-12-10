import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import { Router, Link, useHistory, useLocation} from 'react-router-dom';
import Routes from "../Routes/Routes"



const Wrapper = styled.nav`
    display:flex;
    flex-direction:column;
    border:solid 2px #cecece;
    background-color:#f0f0f0;
    @media only screen and (max-width: 500px){
        max-width: 100%;
        align-items:center;
    }
    &:hover {
        cursor: arrow;
        border:solid 2px #1e1e1e;
    }
    padding: 20px 10px;
    @media only screen and (max-width: 500px){
        padding:0;
    }
`;

const Title = styled.h3`
    opacity: 1;
    :hover{
       
        cursor: pointer;
        color: black;
    }
    margin-bottom:25px;
    font-size:135%;
    @media only screen and (max-width: 500px){
        font-size:100%;
    }
`;
const Tekst = styled.a`
    font-size:75%;
    margin-bottom: 11px;
    
`;


const Appear = styled.a`
    color:#f0f0f0;
    font-weight:700;
    font-size:75%;
    &:hover ~ ${Tekst} {
    color: red;
    font-weight: 900;
    }
    color: #479eb9;
`


const Div = styled.a`
    display: flex;
    
`




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
            <Tekst >{office.data.gate+" "+4}</Tekst>
            <Div><Appear>Call: </Appear><Tekst href={"tel:"+office.data.nummer}>{office.data.nummer}</Tekst></Div>
            <Div><Appear>Mail: </Appear><Tekst href={"mailto:"+office.data.epost} >{office.data.epost}</Tekst></Div>
        </Wrapper>
        )

}


export default SimpleCard