import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';
import ShowReview from './ShowReview';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    useTitle('My reviews');

    useEffect(() => {
        fetch(`https://server-weld-eta.vercel.app/review?User_email=${user?.email}`)
            .then(response => response.json())
            .then(json => setreviews(json))
    }, [user]);


    const Delete = (_id) => {
        const confirmation = window.confirm("Are you sure you want to DELETE this review");
        if (confirmation) {
            console.log(_id)
            fetch(`https://server-weld-eta.vercel.app/reviews/${_id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('You Deleteted the review successfully.')
                    }
                    const remaining = reviews.filter(rev => rev._id !== _id);
                    setreviews(remaining);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    }

    const Update = (_id) => {

        // fetch(`https://server-weld-eta.vercel.app/reviews/${_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(_id),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         if (data.acknowledged) {
        //             alert('Success')
        //         }
        //         const remaining = reviews.filter(rev => rev._id !== _id);
        //         setreviews(remaining);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }

    return (
        <table className="table mb-5">

            {/* {reviews.map(review => <p>{review.ServiceName}</p>)} */}

            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Service name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>


            <tbody>
                {
                    reviews.length === 0 ?

                        <h2 className='mt-3 text-primary !'>No reviews were added</h2>
                        :
                        reviews.map((review, index) => <ShowReview key={index} review={review} user={user} Delete={Delete}></ShowReview>)
                }
            </tbody>






        </table >
    );
};

export default MyReview;