import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div class="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;