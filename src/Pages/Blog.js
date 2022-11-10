import React from 'react';
import Card from 'react-bootstrap/Card';
import useTitle from '../Hook/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h2>Blog Page</h2>
            <div className='m-4 p-4'>
                <Card className='mb-4 bg-white'>
                    <Card.Body>
                        <h4>Difference between SQL and NoSQL.</h4>
                        <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </Card.Body>
                </Card>
                <Card className='mb-4 bg-white'>
                    <Card.Body>
                        <h4>What is JWT, and how does it work?</h4>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider</p>
                    </Card.Body>
                </Card>
                <Card className='mb-4 bg-white'>
                    <Card.Body>
                        <h4>What is the difference between javascript and NodeJS?</h4>
                        <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                    </Card.Body>
                </Card>
                <Card className='mb-4 bg-white'>
                    <Card.Body>
                        <h4>How does NodeJS handle multiple requests at the same time?</h4>
                        <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Blog;