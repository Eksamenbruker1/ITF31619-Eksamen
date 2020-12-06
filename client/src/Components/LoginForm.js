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

const LoginForm = ({adress}) => {
            const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        function validateForm() {
            return email.length > 0 && password.length > 0;
        }

        function handleSubmit() {
            window.location.href = "/"+adress
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
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