import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    
    return (
        <div className="col-md-4 text-center">
            <h4 className="text-center">{review.name}</h4>
            <p>{review.comment}</p>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {review.email}</p>
        </div>
    );
};

export default Review;