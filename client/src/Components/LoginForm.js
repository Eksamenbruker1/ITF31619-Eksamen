import React, { useEffect ,useState} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components"
import "./Styles/styles.css"
import { useAuthContext } from '../Components/context/AuthProvider'; 
import { useForm } from 'react-hook-form';
import { login } from './utils/authService';
import { useHistory, useLocation } from 'react-router-dom';

const Wrapper = styled.section`
    display:flex;
    justify-content:space-around;
    padding: 5px;
    margin: 0 auto;
    margin-top:50px;
    @media only screen and (max-width: 800px){
        
    }
`;

const LoginForm = (page,backAdress) => {
        
        const [closeBtnState, setCloseBtnState] = useState(false);

        const [email, setEmail] = useState("");
        const [success, setSuccess] = useState(false);
        const {user, setUser, isLoggedIn } = useAuthContext();
        const [password, setPassword] = useState("");
        const [password2, setPassword2] = useState("");


        console.log("Checking user object for LoginForm Outer")
        console.log(user)

        const history = useHistory();
        const { state } = useLocation();

        const formSubmit = ()=>{
            onSubmit({"email":email,"password":password})
        }
    

        const { register, errors, handleSubmit, formState } = useForm({
            mode: 'onBlur',
          });
    

        useEffect(() => {
            if (isLoggedIn && state) {
              history.push(state?.from.pathname);
            }
        }, [isLoggedIn, state]);

        const onSubmit = async (credentials) => {
         

            if(email.length <= 0 && password.length <= 0 ){
                alert("Du har ikke fylt ut feltene")
                return 
            }   
            if(!user){
            const { data } = await login(credentials);
                if (!data.success) {
                setCloseBtnState(true);
                } else {
                const userc = data?.user;
                const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
                console.log("Data som blir hentet fra server")
                console.log(data)
                user===null&&setUser(userc)
                setSuccess(true);
                //history.push('/');
            }
                
        }

        };
        
        

    return(
        <>
        <styles  type="text/css">
            
        </styles>
        <Wrapper >
            <Form onSubmit={formSubmit}>
            <Form.Group size="mid" controlId="email">
                <Form.Label className={page.page==="registrer"&&"registerInput"}>Email</Form.Label>
                <Form.Control
                autoFocus
                className={page.page==="registrer"&&"registerInput"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
                <Form.Label className={page.page==="registrer"&&"registerInput"}>Passord</Form.Label>
                <Form.Control
                 className={page.page==="registrer"&&"registerInput"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            {page.page==="registrer" &&(   
                    <Form.Group size="lg" controlId="password">
                        <Form.Label className={page.page==="registrer"&&"registerInput"}>Gjenta Passord</Form.Label>
                        <Form.Control
                        className={page.page==="registrer"&&"registerInput"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
            )}
            <Button  
                className="invert" block size="lg" type="submit" disabled={email.length > 0 && password.length > 0 &&onSubmit}
                isLoading={formState.isSubmitting}
                type="submit"
            >
                Login
                
            </Button>
            </Form>
        </Wrapper>
        </>
        )

}


export default LoginForm