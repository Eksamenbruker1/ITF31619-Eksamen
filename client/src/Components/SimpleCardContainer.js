import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import SimpleCard from "./SimpleCard"


const Wrapper = styled.nav`
    padding: 15px;
    border: 1px solid #f0f0f0;
    background-color: #f7fbff;
    display:grid;
    margin:${props => props.viewType?"0px":"40px"};
    column-gap: 20px;
    row-gap:20px;
    grid-template-columns:${props => props.viewType?"1fr":"1fr 1fr 1fr 1fr"}; 
    @media only screen and (max-width: 800px){
        grid-template-columns: ${props => props.viewType?"1fr":"1fr 1fr"}; 
    }
    @media only screen and (max-width: 500px){
        grid-template-columns: 1fr; 
        background-color: #ffffff;
        text-align:center;
        padding:${props => props.viewType?"10px":"25px"};
        row-gap:${props => props.viewType?"10px":"25px"};
    }
`;

const SimpleCardContainer = ({data,viewType}) => {
    const [city,setCity] = useState(data)

    
    
    return(
        <Wrapper viewType={viewType}> 
            {
            city.Kontor.map((office)=>(
                <SimpleCard  viewType={viewType&&viewType} data={office}></SimpleCard>
                
            ))}
        </Wrapper>
        )

}


export default SimpleCardContainer