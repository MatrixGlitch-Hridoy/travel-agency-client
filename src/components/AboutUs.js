import React from 'react';

const AboutUs = () => {
    return (
        <div className="py-5" style={{background:'#eee'}}>
        <div className="container" >
            <h1 className="text-center mb-5 fw-bolder">About Us</h1>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6">
                    <h1 className="fw-bolder">Explore All Corners of The World With Us</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <button className="btn btn-warning mt-4 py-2 px-3 fw-bolder">Read More</button>
                </div>
                <div className="col-sm-12 col-md-6">
                        <img src="https://i.ibb.co/YNDhZWr/pura-ulun-danu-bratan-temple-in-Bali-indonesia.jpg" className="w-100" alt="about" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;