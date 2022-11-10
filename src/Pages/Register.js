import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const Register = () => {

    const [errormsg, setError] = useState();
    useTitle('Register')

    const { createUser, ProviderLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className='m- p-5'>
            <Card >

                <h2 className='p-4'>Please Register...!!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter Your Full Name" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photo" type="text" placeholder="photo URL" />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="email address" required />
                    </Form.Group>

                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="password" required />
                    </Form.Group>

                    <Button className='m-4' variant="primary" type="submit">
                        Register
                    </Button>

                    <div>
                        {
                            <p className='ms-3 mt-2 text-danger'>{errormsg}</p>
                        }
                    </div>

                    <div>
                        <Link className='ms-3' to='/logIn'>Already have an account</Link>
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

export default Register;