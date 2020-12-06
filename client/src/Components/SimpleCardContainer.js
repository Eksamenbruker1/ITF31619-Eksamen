import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import SimpleCard from "./SimpleCard"


const Wrapper = styled.nav`
    display:grid;
    margin:40px;
    column-gap: 20px;
    row-gap:20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media only screen and (max-width: 800px){
        grid-template-columns: 1fr 1fr; 
    }
    @media only screen and (max-width: 500px){
        grid-template-columns: 1fr; 
    }
`;

const SimpleCardContainer = ({data}) => {
    const [city,setCity] = useState(data)

    for(let j = 0;j < data.Kontor.length;j++){
        for(let k = 0; k < data.Kontor[j].ansatte.length;k++){
            
        }
    }
    
    return(
        <Wrapper > 
            {
            city.Kontor.map((office)=>(
                <SimpleCard  data={office}></SimpleCard>
                
            ))}
        </Wrapper>
        )

}


export default SimpleCardContainer