import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetch('http://localhost:5000/hotels')
        .then(res=>res.json())
        .then(data=>{
            setHotels(data)
            setIsLoading(false)
        });
    },[])
    return (
        <div className="container my-5">
            <h1 className="text-center">Popular Hotels</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    hotels.map(hotel=><Hotel key={hotel._id} hotel={hotel}></Hotel>)
                }
            </div>            
        </div>
    );
};

export default Hotels;