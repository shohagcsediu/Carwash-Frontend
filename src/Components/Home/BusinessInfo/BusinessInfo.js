import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'dark'
    },
    {
        title: 'Visit Our Location',
        description: 'Uttara, Dhaka',
        icon: faMapMarker,
        background: 'primary'
    },
    {
        title: 'Call us now',
        description: '01912345678',
        icon: faPhone,
        background: 'dark'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;