import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ReviewDetails = () => {

    const [reviewsInfo, setReviewsInfo] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-savannah-58982.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setReviewsInfo(data))
    }, [])
    
    return (
        <section className="review">
            <div className="container">
            <div className="text-center">
            <h5 className="text-primary">clients said</h5>
                <h2>Testimonials</h2>
            </div>
                <div className="row">
                    {
                        reviewsInfo.map(review => <Review review={review}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviewDetails;