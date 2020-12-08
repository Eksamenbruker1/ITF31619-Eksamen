import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import ArticleThumbnail from "./ArticleThumbnail"
import axios from "axios"
import list from "./utils/articleService"


const Wrapper = styled.nav`
    background-color:#f7fbff;
    border: 1px solid #f0f0f0;
    max-width: 80%;
    padding: 15px;
    margin: 0 auto;
    margin-top:50px;
    @media only screen and (max-width: 800px){
        width: 90%;
        margin-top: 0px;
    }
    @media only screen and (max-width: 500px){
        width: 80%;
    }
    @media only screen and (min-width: 1775px){
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const ArticleList = (data) => {
    const [artikler, setArtikler] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const categories = []

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:5000/api/v1/articles/`)
            res.data&&setArtikler(res.data.data)
            
          } catch (error) {
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
    }, []); 
    
    console.log(artikler)
    return(
        <Wrapper> 
                {artikler&&artikler.map((thumbnail)=>(
                    <>
                        <ArticleThumbnail article={thumbnail}/>
                    </>
                ))}

        </Wrapper>
    )
}


export default ArticleList