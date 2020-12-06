import React, { useEffect ,useState} from "react"
import styled from "styled-components"

const P= styled.p`
    color: red;
    font-size: 80%;

`

const Span = styled.span`
    color: darkred;

`

const Alert = (alert) => {

    return(
        <P>
           Alert: <Span>generic message</Span>
        </P>
    )

}


export default Alert