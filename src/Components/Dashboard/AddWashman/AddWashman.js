import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddWashman = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://sheltered-savannah-58982.herokuapp.com/addWashman', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('You added another washman');
            })
            .catch(error => {
                console.error(error)
            })
                 
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-brand">Add a Washman</h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group mb-3">
                        <label for="exampleInputName" class="form-label">Washman Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Name" />
                    </div>

                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email Address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter Email" />
                    </div>

                    <div class="form-group mb-3">
                        <label for="formFile" class="form-label">Upload Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" name="picture" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddWashman;