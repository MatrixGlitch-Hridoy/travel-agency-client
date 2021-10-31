import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/bookings/${user.email}`).then((res) => {
      setBookings(res.data);
    });
  }, []);
  const handleCancelBooking = (id) => {
    const permission = window.confirm("Are you sure, you want to cancel?");
    if (permission) {
      axios.delete(`http://localhost:5000/bookings/${id}`).then((res) => {
        // console.log(res);
        if (res.data.deletedCount > 0) {
          alert("Booking Cancel Successful!");
          const remainingBooking = bookings.filter(
            (booking) => booking._id !== id
          );
          setBookings(remainingBooking);
        }
      });
    }
  };
  return (
    <div class="container">
      <h1 class="text-center mt-5 ">My Bookings</h1>
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
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.place}</td>
                    <td>{booking.price}</td>
                    <td>{booking.username}</td>
                    <td>{booking.email}</td>
                    <td className="text-success fw-bold">{booking.status}</td>
                    <td>
                      <button
                        class="btn btn-danger"
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

export default MyBookings;
