import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const Checkout = () => {
    useTitle('Checkout');
    const service = useLoaderData();
    const [reviews, setreviews] = useState([]);

    const { user } = useContext(AuthContext);



    const submitReview = (event) => {
        event.preventDefault();

        const review = event.target.review.value;

        const dbreview = {
            User_email: user.email,
            ServiceName: service.name,
            Review: review
        }

        fetch('https://server-weld-eta.vercel.app/reviews', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dbreview),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert('Added review successfully')
                }
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    useEffect(() => {
        fetch(`https://server-weld-eta.vercel.app/servicereview?ServiceName=${service.name}`)
            .then(response => response.json())
            .then(json => setreviews(json))
    }, []);

    const message = () => {
        alert('Please Log In first !!')
    }

    return (
        <div>
            <div className="card mb-5">
                <img style={{ height: "600px" }} src={service.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{service.name}</h3>
                    <h5 className="card-text">{service.price}</h5>
                    <p className="card-text">{service.about}</p>

                </div>
            </div>

            <div className="card mb-5">
                {
                    reviews.map(review => {
                        <div className="card-body">
                            <h3 className="card-title">{review.User_email}</h3>
                            <h5 className="card-text">{review.Review}</h5>
                        </div>

                    })
                }
            </div>


            <Card className='mb-5 mt-5' >

                <h2 className='p-4 text-primary'>Give your review.</h2>

                {
                    user ?
                        <form onSubmit={submitReview} className='container'>
                            <div class="form-group">
                                <input name='review' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Review" />
                            </div>
                            <button className="btn btn-primary mt-3 mb-3">Submit</button> :
                        </form>

                        :
                        <Link to='/login'><button type="submit" className="btn btn-primary mt-3 mb-3">Go to Log In page for review</button></Link>

                }


            </Card>

        </div>
    );
};

export default Checkout;