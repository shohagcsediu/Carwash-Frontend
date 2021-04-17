import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const CarService = ({ carservice }) => {
    
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://sheltered-savannah-58982.herokuapp.com/${carservice.image}`} alt="" />
            <h4>{carservice.name} {carservice.price} taka</h4>
            <p>{carservice.details}</p>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {carservice.email}</p>
        </div>
    );
};

export default CarService;