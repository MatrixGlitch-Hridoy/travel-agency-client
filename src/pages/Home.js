import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hotels from '../components/Hotels';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Hotels/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;