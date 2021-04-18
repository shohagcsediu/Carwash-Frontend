import React from 'react';
import washing from '../../../images/banner/car-wash-home-banner.jpg';
import carserving from '../../../images/banner/smartfeatured.jpg';
import washo from '../../../images/banner/car-wash-home-banner.jpg';
import Blog from '../Blog/Blog';


const blogData = [
    {
        name: 'How to take care of car',
        img: washing
    },
    {
        name: 'Car Check Up',
        img: carserving
    },
    {
        name: 'Learn Car Driving',
        img: washo
    }
]

const Blogs = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Recent Blog</h5>
                <h2>Get New Tips</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        blogData.map(blog => <Blog blog={blog}></Blog>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;