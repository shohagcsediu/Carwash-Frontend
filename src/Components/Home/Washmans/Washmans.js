import React, { useEffect, useState } from 'react';
import Washman from '../Washman/Washman';

const Washmans = () => {

    const [washmansInfo, setWashmansInfo] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-savannah-58982.herokuapp.com/washmans')
            .then(res => res.json())
            .then(data => setWashmansInfo(data))
    }, [])

    return (
        <section style={{backgroundColor:'#808080'}} className="washmans">
            <div className="container">
            <div className="text-center">
                <h5>team member</h5>
                <h2>Car Mechanic</h2>
            </div>
                <div className="row">
                    {
                        washmansInfo.map(washman => <Washman washman={washman}></Washman>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Washmans;