import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';






const SelectBox = (kategorier,setState) => {
    return(
            <select onchange={setState(false)}>
                {kategorier.kategorier.map((kategori)=><option value={kategori}>{kategori}</option>)}
            </select>
        )

}


export default SelectBox