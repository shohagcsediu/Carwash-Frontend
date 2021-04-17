import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {

    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()

        formData.append('name', info.name);
        formData.append('name', info.comment);
        formData.append('email', info.email);

        fetch('https://sheltered-savannah-58982.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('You added testimonial');
            })
            .catch(error => {
                console.error(error)
            })
                 
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-brand">Add New Testimonial</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group mb-3">
                        <label for="exampleInputName" class="form-label">Client Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Client Name" />
                    </div>

                    <div class="form-group mb-3">
                        <label for="exampleInputName" class="form-label">Client Comment</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="comment" placeholder="Enter Review Details" />
                    </div>

                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email Address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter Email" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;