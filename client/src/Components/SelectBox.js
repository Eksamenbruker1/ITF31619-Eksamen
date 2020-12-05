import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';






const SelectBox = (kategorier) => {

    return(
            <select>
                {kategorier.kategorier.map((kategori)=><option value={kategori}>{kategori}</option>)}
            </select>
        )

}


export default SelectBox