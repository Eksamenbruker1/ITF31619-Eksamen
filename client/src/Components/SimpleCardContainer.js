import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import SimpleCard from "./SimpleCard"
import SimpleListItem from "./SimpleListItem"


const Wrapper = styled.nav`
    padding: 15px;
    border: 1px solid #f0f0f0;
    background-color: #f7fbff;
    display:grid;
    margin:${props => props.viewType?"55 10px":"40px"};
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
    @media only screen and (max-width: 500px){
        margin:50px 0px 0px 0px;
    }
`;

const SimpleCardContainer = ({data,viewType}) => {
    const [city,setCity] = useState(data)

    
    
    return(
        <Wrapper viewType={viewType}> 
            {viewType&&
            city.Kontor.map((office)=> (<SimpleCard  viewType={viewType&&viewType} data={office}></SimpleCard>))
            }
            {!viewType&&
            city.Kontor.map((office)=> (<SimpleListItem  viewType={viewType&&viewType} data={office}></SimpleListItem>))
            }
              
                
            
        </Wrapper>
        )

}


export default SimpleCardContainer