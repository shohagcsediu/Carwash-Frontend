import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh", left:"0"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/addService" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                    </Link>
                </li>
               
                <li>
                    <Link to="/dashboard/addWashman" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Washman</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addTestimonial" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/settings" className="text-white text-decoration-none">
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;