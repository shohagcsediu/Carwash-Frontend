import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import effect from './CarService.css';
const CarService = ({ carservice }) => {
    
    return (
        <div className="col-md-4 text-center">
            <img style={effect} className="img-fluid mb-3" src={`https://sheltered-savannah-58982.herokuapp.com/${carservice.image}`} alt="" />
            <h4>{carservice.name} {carservice.price} taka</h4>
            <p>{carservice.details}</p>
            <button  style={{color: 'blue'}}> <Link to="/appointment">Book Now</Link></button>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {carservice.email}</p>
        </div>
    );
};

export default CarService;