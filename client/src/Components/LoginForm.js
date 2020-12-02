import React, { useEffect ,useState} from "react"
import styled from "styled-components"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Wrapper = styled.section`
    max-width: 80%;
    display:flex;
    justify-content:space-around;
    padding: 5px;
    margin: 0 auto;
    margin-top:50px;
    margin-bottom:200px;
    @media only screen and (max-width: 800px){
        
    }
`;


const LoginForm = () => {
            const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        function validateForm() {
            return email.length > 0 && password.length > 0;
        }

        function handleSubmit(event) {
            event.preventDefault();
        }

    return(
        <Wrapper>
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
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
            </Form>
        </Wrapper>
        )

}


export default LoginForm