import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Hotels from '../components/Hotels';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Hotels/>
            <Contact/>
        </div>
    );
};

export default Home;