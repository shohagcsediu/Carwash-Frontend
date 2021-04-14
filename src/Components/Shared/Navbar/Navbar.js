import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Doctors Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link me-5 text-info" as={Link}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" href="#">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/appointment" className="nav-link me-5 text-info" as={Link}>Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/appointment" className="nav-link me-5 text-info" as={Link}>Dashboard</Link>
                        </li>
                        {loggedInUser.email ?
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5 text-info" as={Link}> {loggedInUser.name} </Link>
                            </li> :
                            <li className="nav-item">
                                <Link to="/login" className="nav-link me-5 text-info" as={Link}>Log In</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;