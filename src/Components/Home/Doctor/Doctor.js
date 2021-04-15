import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ doctor }) => {
    console.log(doctor.image);
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.image}`} alt="" />
            <h4>{doctor.name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {doctor.email}</p>
        </div>
    );
};

export default Doctor;