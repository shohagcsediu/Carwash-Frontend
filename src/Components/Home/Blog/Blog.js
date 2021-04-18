import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '150px' }} src={blog.img} alt={blog.name} />
            <h5 className="mt-3 mb-3">{blog.name}</h5>
            <p className="text-secondary">Reade More</p>
        </div>
    );
};

export default Blog;