import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageAllBookings = () => {
  const [manageBookings, setManageBookings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/bookings").then((res) => {
      setManageBookings(res.data);
    });
  }, [manageBookings]);

  const handleCancelBooking = (id) => {
    const permission = window.confirm("Are you sure, you want to cancel?");
    if (permission) {
      axios.delete(`http://localhost:5000/bookings/${id}`).then((res) => {
        // console.log(res);
        if (res.data.deletedCount > 0) {
          alert("Booking Cancel Successful!");
          const remainingBooking = manageBookings.filter(
            (booking) => booking._id !== id
          );
          setManageBookings(remainingBooking);
        }
      });
    }
  };
  
  const handleStatus = (id) => {
    axios.put(`http://localhost:5000/bookings/${id}`)
    .then(res=>{
        if(res.status===200){
        alert('Booking Approved SuccessFully!')
        }
    })
  }
  return (
    <div class="container">
      <h1 class="text-center mt-5 ">Manage All Bookings</h1>
      <div class="row mt-5">
        <div class="col-sm-12 justify-content-center mx-auto">
          <table class="table border-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Place</th>
                <th scope="col">Price</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {manageBookings.length > 0 ? (
                manageBookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.place}</td>
                    <td>{booking.price}</td>
                    <td>{booking.username}</td>
                    <td>{booking.email}</td>
                    <td>{booking.status}</td>
                    <td>
                        {booking.status!=='Approved' ?
                      <button onClick={()=>handleStatus(booking._id)} class="btn btn-success">Approve</button>
                      :
                      ""
                }
                      <button
                        class="btn btn-danger mx-1"
                        onClick={() => handleCancelBooking(booking._id)}
                      >
                        Cancel Booking
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h3 class="text-center text-danger my-5 ">No Records Found</h3>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllBookings;
