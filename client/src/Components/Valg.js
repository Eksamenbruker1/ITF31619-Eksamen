import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import {Link}  from 'react-router-dom';
import Søk from "./Søk"
import Filter from "./Filter"
import axios from "axios"
import list from "./utils/articleService"
import { ResponsiveEmbed } from "react-bootstrap";


const Wrapper = styled.section`
    max-width: 100%;
    max-width: 933px;
    display:grid;
    grid-template-columns:1fr 1fr;
    row-gap:20px;
    column-gap:20px;
    padding: 5px;
    margin:50px;
    @media only screen and (max-width: 600px){
        grid-template-columns:1fr;
        width:80%;
        margin:20px 50px;
        margin: 0 auto;
    }
    @media only screen and (min-width: 800px){
        margin: 0 auto;
        width: 75%;
        margin-top: 40px;
    }

`;

const Button = styled.button`
    background-color:#f0f0f0;
    overflow:hidden;
    font-size:120%;
    color: black;
    border: 0;
    padding:40px;
    font-weight:500;
    :hover{
        border: solid darkgrey 3px;
        @media only screen and (min-width: 800px){
           padding:37px; 
        }

    }
    @media only screen and (max-width: 800px){
        padding:10px 30px;
        border-radius:40px;
        background-color:#479eb9;
        color: white;
        border: none;
        @media only screen and (max-width: 800px){
            padding:10px 30px;
        }
    }
    @media only screen and (max-width: 600px){
        width:100%;
        
    }


`;


const Splitter = styled.section`
    display:flex;
    justify-content:space-between;
    width:100%;
    @media only screen and (max-width: 500px){
        margin-top: 15px;
    }
    @media only screen and (max-width: 800px){
        width:100%;
    }
    justify-content:space-between;
    @media only screen and (max-width: 600px){
        flex-direction:column;

    }
`;


const Input = styled.input`
    overflow:hidden;
    width: 175px;
`;




const Valg = ({søk}) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const categories = []

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/categories/`);
            !data&&setData(res.data)
          } catch (error) {
            alert("this poll does not exist");
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
      }, []); 

      data&&data.map((kategori)=>categories.push(kategori.CategoryName))
      console.log(categories)

    return(
        <>
            <Wrapper>
                <Link to="/opprett-fagartikkel"><Button>Ny Artikkel</Button></Link>
                <Splitter>
                    {søk&&(<Button><Input value={søk}></Input></Button>)}
                    {!søk&&(<Søk></Søk>)}
                    <Filter kategorier={categories}></Filter>
                </Splitter>
            </Wrapper>
        </>
        )

}


export default Valg