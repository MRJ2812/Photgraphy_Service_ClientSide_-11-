import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';




const Header = () => {

    const [dark, setDark] = useState(false);
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className='mb-3'>
            <Container>
                <Image src={''}></Image>

                <Navbar.Brand className='text-primary font-weight-bold'>MR Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link><Link className='text-decoration-none' to='/'><Button variant="outline-info">Home</Button></Link></Nav.Link>
                        {
                            user?.uid ?
                                <>
                                    <Nav.Link><Link className='text-decoration-none' to='/MyReview'><Button variant="outline-info">My reviews</Button></Link></Nav.Link>
                                    <Nav.Link><Link className='text-decoration-none' to='/addService'><Button variant="outline-info">Add service</Button></Link></Nav.Link>
                                </>
                                :
                                <>
                                </>
                        }

                        <Nav.Link><Link className='text-decoration-none' to='/blog'><Button variant="outline-info">Blog</Button></Link></Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{ }</span>
                                        <Button variant="dark" onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button>Log In</Button></Link> <small> </small>
                                        <Link to='/register'><Button>Register</Button></Link>
                                    </>

                            } <span> </span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">


                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;