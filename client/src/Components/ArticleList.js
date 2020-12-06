import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import ArticleThumbnail from "./ArticleThumbnail"


const Wrapper = styled.nav`
    max-width: 80%;
    padding: 5px;
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

const ArticleList = () => {
    const data = require('../data/artikler.json');
    const dummyThumbnailArticle = [...data]
    return(
        <Wrapper> 
                {dummyThumbnailArticle.map((thumbnail)=><ArticleThumbnail article={thumbnail}/>)}
        </Wrapper>
        )

}


export default ArticleList