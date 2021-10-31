import React from 'react';
import './css/Banner.css';
const Banner = () => {
    return (
        <div className="container-fluid banner">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className="headings">
                        <h1>"ADVENTURE AWAITS"</h1>
                        <p>What are you waiting for?</p>
                    </div>
                    <button className="btn btn-warning button px-5 fs-4 fw-bold">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;