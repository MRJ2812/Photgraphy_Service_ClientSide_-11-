import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaMailBulk } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import useTitle from '../Hook/useTitle';

const Login = () => {

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useTitle('Login')

    const [errormsg, setError] = useState();

    const { ProviderLogin, signIn } = useContext(AuthContext);

    //email and pass
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    //Google signIn
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    //Github signIN
    const gitHubProvider = new GithubAuthProvider()
    const handleGitHubLogin = () => {
        ProviderLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='m- p-5'>
            <Card>
                <h2>Please Login..!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <div className='ms-3'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>

                    <div className='ms-3'>
                        <Link to='/register'>Cerate an account</Link>
                    </div>

                    <div>
                        {
                            <p className='ms-3 mt-2 text-danger'>{errormsg}</p>
                        }
                    </div>


                    <div>
                        <ButtonGroup>
                            <Button onClick={handleGoogleLogin} className='m-3 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                        </ButtonGroup>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default Login;