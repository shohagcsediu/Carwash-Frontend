import React from 'react';
import headerImage from '../../../images/banner/smartfeatured.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({ handleDateChange }) => {

    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Car Wash Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={headerImage} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;