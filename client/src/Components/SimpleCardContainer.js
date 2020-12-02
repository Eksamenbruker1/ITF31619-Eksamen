import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import SimpleCard from "./SimpleCard"


const Wrapper = styled.nav`
    display:grid;
    margin:40px;
    column-gap: 20px;
    row-gap:20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const SimpleCardContainer = (data) => {
    const [city,setCity] = useState(data)
   
    return(
        <Wrapper > 
            {city.data.Kontor.map((office)=>(
                <SimpleCard data={office}></SimpleCard>
            ))}
        </Wrapper>
        )

}


export default SimpleCardContainer