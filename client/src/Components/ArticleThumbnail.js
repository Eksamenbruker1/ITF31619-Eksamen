import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import toilet from "../img/toilet_1.jpg"
import { Router, NavLink, useHistory,useParams} from 'react-router-dom';

const Wrapper = styled.nav`
    margin: 20px;
    background-color:#f0f0f0;
    display:flex;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
    border: solid 2px #cecece;
    @media only screen and (max-width: 800px){
        flex-direction:column;
        border-top-right-radius:0px;
        border-bottom-left-radius:5px;
        border: solid 1px #cecece;
        margin-bottom: 40px;
    }
    width:100%;
    max-width: 677px;
    @media only screen and (min-width: 800px){
        margin: 20 auto;
    }
    @media only screen and (max-width: 500px){
        flex-direction:column;
        margin: 0;
        border: solid 1px #cecece;
        margin-bottom: 40px;
    }
    
`;

const Title = styled.h2`
    color: black;
    font-size:130%;    
    @media only screen and (max-width: 600px){
        font-size:100%;
    }
`;

const Text = styled.p`
color: black;
padding:10px 10px 0 10px;
text-decoration:none;
    
`;

const TContainer = styled.section`
    display:flex;
    margin: 0;
    width: 100%;
    justify-content:space-between;
    background-color:#f0f0f0;
    padding: 20px;
    @media only screen and (max-width: 800px){
        margin: 0;
    }
    @media only screen and (max-width: 600px){
        flex-direction:column;
    }
`;

const Kategori = styled.a`
    background-color:#479eb9;
    color:white;
    height:100%;
    border-radius:2px;
    margin-left:20px;
    font-weight:700;
    padding:6px;
    @media only screen and (max-width: 800px){
        margin-left:20px;
        height: 10%;
    }
    @media only screen and (max-width: 600px){
        margin-left:0px;
    }
`;

const Img = styled.img`
    width: 30%;
    min-width:180px;
    min-height:180px;
    @media only screen and (max-width: 800px){
        width:100%;
        height:auto;
    }
`;

const ColumnContainer = styled.section`
    @media only screen and (max-width: 800px){
        padding: 10px;
        padding: 0px;
    }
    margin:0;
    padding: 0px;
    width: 100%;
    display:flex;
    color: #fffeeb;
    flex-direction:column;
    justify-content:space-around;
`;

const ArticleThumbnail = ({article}) => {
    const thmb = article;
    let slug = ""
    article.title.split(" ").map((word)=>slug+=word+"-")
    
    return(
            <Wrapper className="her"> 
                    <Img src={toilet}></Img>
                    <NavLink to={"/fagartikkel/"+slug.toLowerCase().substring(0, slug.length - 1)}>
                    <ColumnContainer>
                        <TContainer>
                            <Title>{thmb.title}</Title>
                            <Kategori>Kategori</Kategori>
                        </TContainer>
                        <Text >{thmb.ingress}</Text>
                    </ColumnContainer>
                    </NavLink>
            </Wrapper>
        )

}


export default ArticleThumbnail