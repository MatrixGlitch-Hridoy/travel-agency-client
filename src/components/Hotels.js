import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://ghastly-coffin-01875.herokuapp.com/hotels')
        .then(res=>{
            setHotels(res.data)
            setIsLoading(false)
        });
    },[])
    return (
        <div className="container my-5">
            <h1 className="text-center fw-bolder">Popular Hotels</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    !isLoading ? hotels.map(hotel=><Hotel key={hotel._id} hotel={hotel}></Hotel>)
                    :
                    <p className="spinner-grow text-warning my-5 text-center"></p>
                    
                }
            </div>            
        </div>
    );
};

export default Hotels;