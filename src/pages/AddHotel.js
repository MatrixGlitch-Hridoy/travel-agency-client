import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddHotel = () => {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();

    const handleAddHotel = (e) => {
        e.preventDefault();
        const values = {
          name: name,
          place:place,
          Price:price,
          img:image,
          Description:description
        }

        axios.post('https://ghastly-coffin-01875.herokuapp.com/hotels',values)
        .then(res=>{
          if(res.data.insertedId){
            alert('Hotel Added Successfully!');
            history.push('/');
          }
        })
        
    }
    return (
        <>
            <div class="container my-5">
        <h1 className="text-center">Add Hotel</h1>
        <div class="row">
          <div class="col-sm-12">
            <form onSubmit={handleAddHotel} class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Hotel Name
                </label>
                <input 
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Enter hotel Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Place
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  required
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
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
                <div class="d-grid">
              <button type="submit" class="btn btn-warning">
                Add Hotel
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default AddHotel;