import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/useTitle';

const AddService = () => {
    useTitle('AddService')

    const submitService = (event) => {
        event.preventDefault();



        const name = event.target.Name.value;
        const image = event.target.Image.value;
        const price = event.target.Price.value;
        const about = event.target.about.value;

        const newService = {
            price: "$" + `${price}`,
            picture: image,
            name: name,
            about: about
        }

        fetch('https://server-weld-eta.vercel.app/addservice', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert('Added Service successfully')
                }
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <Form onSubmit={submitService}>
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control name="Name" type="text" placeholder="Service Name" required />

                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Service Image URL</Form.Label>
                    <Form.Control name="Image" type="text" placeholder="Service Image URL" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="Price" type="text" placeholder="Price" required />

                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>About</Form.Label>
                    <Form.Control name="about" type="text" placeholder="About" required />

                </Form.Group>

                <div className='ms-3 mb-5'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>







            </Form>
        </div>
    );
};

export default AddService;