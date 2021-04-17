import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CarServices from '../CarServices/CarServices';
import Header from '../Header/Header';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Services from '../Services/Services';
import Washmans from '../Washmans/Washmans';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CarServices></CarServices>
            <Washmans></Washmans>
            <ReviewDetails></ReviewDetails>
            <Footer></Footer>
        </div>
    );
};

export default Home;