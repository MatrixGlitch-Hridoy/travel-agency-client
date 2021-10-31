import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
const BookHotel = () => {
    const {id} = useParams();
    const [hotel,setHotel] = useState([]);
    const {user} = useAuth();
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState("");
    const [displayName, setdisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    useEffect(()=>{
        fetch(`http://localhost:5000/hotels/${id}`)
        .then(res=>res.json())
        .then(data=>{
          setHotel(data)
          setName(data.name)
          setPlace(data.place)
          setPrice(data.Price)
          setdisplayName(user.displayName)
          setEmail(user.email)
        })
    },[])

    const handleBooking = (e) => {
        e.preventDefault();
        const values = {
          h_id:id,
          name: name,
          place:place,
          price:price,
          username:displayName,
          email:email,
          address:address,
          phone:phone,
          status:'pending'
        }

        axios.post('http://localhost:5000/bookings',values)
        .then(res=>{
          if(res.data.insertedId){
            alert('Booking Successful');
            history.push('/');
          }
        })
    }
    return (
        <>
            <div class="container my-5">
        <h1 className="text-center">Book Hotel</h1>
        <div class="row">
          <div class="col-sm-12">
            <form onSubmit={handleBooking} class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Hotel Name
                </label>
                <input 
                type="text"
                class="form-control"
                id="inputEmail4"
                onChange={(e) => setName(e.target.value)}
                name="name"
                defaultValue={hotel.name}
                readOnly />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Place
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={hotel.place}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={hotel.Price}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={user.displayName}
                  readOnly
                />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  defaultValue={user.email}
                  readOnly
                />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Address"
                  required
                  value={address}
                 onChange={(e) => setAddress(e.target.value)}

                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
                <div class="d-grid">
              <button type="submit" class="btn btn-warning">
                Book Hotel
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default BookHotel;