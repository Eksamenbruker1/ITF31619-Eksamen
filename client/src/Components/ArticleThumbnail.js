import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import toilet from "../img/toilet_1.jpg"
import { Router, Link, useHistory,useParams} from 'react-router-dom';

const Wrapper = styled.nav`
    *{
        text-decoration:none;
    }    
    display:flex;
    border-radius:5px;
    border: solid 7px #e2e2e5;
    @media only screen and (max-width: 800px){
        flex-direction:column;
        margin: 10 0;
        border: solid 7px #f0f0f0;
    }

`;

const Title = styled.h2`
    font-size:140%;    
    @media only screen and (max-width: 600px){
        font-size:100%;
    }
`;

const Text = styled.p`
color: black;
text-decoration:none;
    @media only screen and (max-width: 600px){
        padding:20px;
        
    }
`;

const Container = styled.section`
    display:flex;
    width: 100%;
    justify-content:space-between;
    background-color:#f0f0f0;
    padding: 20px;
    @media only screen and (max-width: 800px){
        
    }
    @media only screen and (max-width: 600px){
        flex-direction:column;
    }
`;

const Kategori = styled.a`
    background-color:#479eb9;
    color:white;
    height:100%;
    margin-left:20px;
    font-weight:700;
    padding:6px;
    @media only screen and (max-width: 800px){
        margin-left:20px;
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
    padding: 20px;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;

const ArticleThumbnail = ({article}) => {
    const thmb = article;
    return(
        <Link to={"/fagartikkel/"+article.title.replace(/ /g,'')}>
            <Wrapper> 
                    <Img src={toilet}></Img>
                    <ColumnContainer>
                        <Container>
                            <Title>{thmb.title}</Title>
                            <Kategori>Kategori</Kategori>
                        </Container>
                        <Text >{thmb.ingress}</Text>
                    </ColumnContainer>
            </Wrapper>
        </Link>
        )

}


export default ArticleThumbnail