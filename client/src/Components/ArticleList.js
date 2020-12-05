import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import ArticleThumbnail from "./ArticleThumbnail"


const Wrapper = styled.nav`
    max-width: 80%;
    padding: 5px;
    margin: 0 auto;
    margin-top:50px;
    @media only screen and (max-width: 600px){
        margin-top:0px;
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