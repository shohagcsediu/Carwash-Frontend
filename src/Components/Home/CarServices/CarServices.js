import React, { useEffect, useState } from 'react';
import CarService from '../CarService/CarService';

const CarServices = () => {

    const [carservicesInfo, setCarServicesInfo] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-savannah-58982.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setCarServicesInfo(data))
    }, [])

    return (
        <section className="carservices">
            <div className="container">
            <div className="text-center">
                <h5 className="text-primary">for you</h5>
                <h2>Our Car Services</h2>
            </div>
                <div className="row">
                    {
                        carservicesInfo.map(carservice => <CarService carservice={carservice}></CarService>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CarServices;