import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../images/banner/car-wash-home-banner.jpg';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Make Car Life Longer</h1>
                <p className="text-secondary">Wash your car regularly and make your car longer life. A car always should be clean and nice. auto wash is a facility used to clean the exterior and, in some cases, the interior of motor vehicles. Car washes can be self-serve, fully automated, or full-service with attendants who wash the vehicle.</p>
                 <button  style={{color: 'blue'}}> <Link to="/appointment">Book Now</Link></button>
              
            </div>
            <div className="col-md-6">
                <img src={headerImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;