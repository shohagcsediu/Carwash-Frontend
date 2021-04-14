import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;