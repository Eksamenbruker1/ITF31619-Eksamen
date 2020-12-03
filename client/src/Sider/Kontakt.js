import React, { Component, useEffect ,useState} from "react"
import Header from "../Components/Header"
import ImageCard from "../Components/ImageCard"
import banner from "../img/contact.gif"
import Form from "react-bootstrap/Form"
import styled from "styled-components"
import Footer from "../Components/Footer"
import Button from "react-bootstrap/Button"

const Wrapper = styled.div`
    width:50%;
    margin:0 auto;
    margin-top: 70px;
`



const Kontakt= () => {

    return(
        <div>
            <Header back={true} ActiveItem="Kontakt"></Header>
            <ImageCard imgSource={banner} TextColor="black" Content="Kontakt oss" Width="Full"></ImageCard>
            <Wrapper>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> 
            </Wrapper>
            <Footer></Footer>
        </div>
        )
}


export default Kontakt