import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import { Router, Link, useHistory, useLocation} from 'react-router-dom';
import Routes from "../Routes/Routes"
import "./Styles/styles.css"

const Title = styled.h3`
    color:${props => !props.viewType?"#479eb9":"#212529"};
    opacity: 1;
    :hover{
       
        cursor: pointer;
        color: black;
    }
    margin-bottom:25px;
    font-size:150%;
    @media only screen and (max-width: 800px){
        font-size:100%;
    }
    
`;

const Tekst = styled.a`
    margin-bottom: 11px;
    
`;


const Appear = styled.a`
    color:#f0f0f0;
    font-weight:700;
    &:hover ~ ${Tekst} {
    color: red;
    font-weight: 900;
    }
    color: #479eb9;
`


const Div = styled.a`
    display: flex;
    
`

const Wrapper = styled.nav`
    display:flex;
    flex-direction:column;
    border:solid 2px #cecece;
    background-color:#f0f0f0;
    @media only screen and (max-width: 500px){
        max-width: 100%;

    }
    &:hover {
        cursor: arrow;
        border:solid 2px #1e1e1e;
    }
    padding: 20px 10px;
    justify-content:center;

    justify-content: space-between;
`;




const SimpleCard =  (office,viewType) => {
    let history = useHistory();
    //Haha, se så performance-vennlig dette er
    const navn = office.data.navn.replace(/\s+/, "").replace(/\s+/, "").replace(/\s+/, "").replace(/\s+/, "")
    console.log(viewType)
    return(
        <Link  to={'/kontor/'+navn}>
            <Wrapper className={!viewType.data?"cardlist":"cardC"} > 
                <Link  to={'/kontor/'+navn}><Title className={viewType&true} >{office.data.navn}</Title ></Link>
                <Tekst   >{office.data.gate+" "+4}</Tekst>
                <Div   ><Appear>Call: </Appear><Tekst href={"tel:"+office.data.nummer}>{office.data.nummer}</Tekst></Div>
                <Div   ><Appear>Mail: </Appear><Tekst href={"mailto:"+office.data.epost} >{office.data.epost}</Tekst></Div>
            </Wrapper>
        </Link>
        )

}


export default SimpleCard