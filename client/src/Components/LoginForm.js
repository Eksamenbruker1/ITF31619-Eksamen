import React, { useEffect ,useState} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components"
import "./Styles/styles.css"

const Wrapper = styled.section`
    display:flex;
    justify-content:space-around;
    padding: 5px;
    margin: 0 auto;
    margin-top:50px;
    @media only screen and (max-width: 800px){
        
    }
`;

const LoginForm = (page) => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [password2, setPassword2] = useState("");

        console.log(page)
        
        function validateForm() {
            if(email.length > 0 && password.length > 0){
                alert("Du har ikke fylt ut feltene")
                return
            }
            if(password2 !== password){
                alert("Passordene er ikke like")
                return
            }
            
        }

        function handleSubmit() {
            window.location.href = "/"
        }
        

    return(
        <>
        <styles  type="text/css">
            
        </styles>
        <Wrapper >
            <Form onSubmit={handleSubmit}>
            <Form.Group size="mid" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
                <Form.Label>Passord</Form.Label>
                <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            {page.page==="registrer" &&(   
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Gjenta Passord</Form.Label>
                        <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
            )}
            <Button  
            className="invert" block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
            </Form>
        </Wrapper>
        </>
        )

}


export default LoginForm