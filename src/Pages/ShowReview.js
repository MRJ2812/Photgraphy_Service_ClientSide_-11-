import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/useTitle';

const ShowReview = ({ review, user, Delete }) => {
    useTitle('Show Reviews');

    const { _id, Review, ServiceName, User_email } = review;



    return (
        <tr>
            <th scope="row">{user.photoURL}</th>
            <td>{ServiceName}</td>
            <td>{User_email}</td>
            <td>{Review}</td>
            <td><Link to={`/servicereview/${_id}`}><button type="button" className="btn btn-primary">Update</button></Link></td>
            <td><button onClick={() => Delete(_id)} type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default ShowReview;