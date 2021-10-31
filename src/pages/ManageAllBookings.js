import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllBookings = () => {
    const [manageBookings, setManageBookings] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/bookings')
        .then(res=>{
            setManageBookings(res.data)
        })
    },[manageBookings])

    const handleCancelBooking = (id) => {
        const permission = window.confirm("Are you sure, you want to cancel?")
        if(permission){
        axios.delete(`http://localhost:5000/bookings/${id}`)
        .then(res=>{
            // console.log(res);
            if(res.data.deletedCount > 0){
                alert('Booking Cancel Successful!');
                const remainingBooking = manageBookings.filter(booking=>booking._id !== id);
                setManageBookings(remainingBooking);
            }
        })
    }
}
    return (
        <div>
        <h1 class="text-center mt-5 ">Manage All Bookings</h1>
        <div class="row mt-5">
            <div class="col-md-6 col-sm-12 justify-content-center mx-auto">
            <table class="table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Place</th>
                <th scope="col">Price</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {

            manageBookings.map(booking=>(
            <tbody key={booking._id}>
              <tr>
                <td>{booking.name}</td>
                <td>{booking.place}</td>
                <td>{booking.price}</td>
                <td>{booking.username}</td>
                <td>{booking.email}</td>
                <button class="btn btn-warning">{booking.status}</button>
                <button class="btn btn-danger" onClick={()=>handleCancelBooking(booking._id)}>Cancel Booking</button>
              </tr>
            </tbody>
            ))
}
          </table>
          </div>
          </div>
    </div>
    );

};

export default ManageAllBookings;