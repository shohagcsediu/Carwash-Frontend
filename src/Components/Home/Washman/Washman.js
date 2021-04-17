import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Washman = ({ washman }) => {
    console.log(washman.image);
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://sheltered-savannah-58982.herokuapp.com/${washman.image}`} alt="" />
            <h4>{washman.name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {washman.email}</p>
        </div>
    );
};

export default Washman;