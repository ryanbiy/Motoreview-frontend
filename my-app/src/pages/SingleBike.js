import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MotorcyclesContext } from "../components/context/MotorcyclesContext";

export default function SingleBike() {
  const { motorcycles, deleteMotorcycle } = useContext(MotorcyclesContext);
  const [singleBike, setSingleBike] = useState(null);

  const nav = useNavigate();
  const { id } = useParams();

  const getMotorcycleById = useCallback((id) => {
    return motorcycles.find((motorcycle) => motorcycle.id === id);
  }, [motorcycles]);
  

  useEffect(() => {
    const motorcycle = getMotorcycleById(id);
    if (motorcycle) {
      setSingleBike(motorcycle);
    } else {
      // Handle error condition or redirect to a not found page
    }
  }, [id, getMotorcycleById]);

  useEffect(() => {
    fetch(`/motorcycles/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setSingleBike(response);
      })
      .catch((error) => {
        console.error("Error fetching destination by ID:", error);
     });
 }, [id]);


  if (!singleBike) {
    return <div>Loading...</div>;
  }

  const handleDelete = () => {
    deleteMotorcycle(id)
      .then(() => {
        console.log("deleted successfully");
        nav("reviews");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Motorcycle '${id}' deleted successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error deleting motorcycle:", error);
        alert("Error deleting motorcycle");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get the updated form values
    const updatedTitle = e.target.elements.title.value;
    const updatedDescription = e.target.elements.description.value;
    const updatedPrice = e.target.elements.price.value;
    const updatedImage = e.target.elements.image.value;
  
    // Create the updated motorcycle object
    const updatedMotorcycle = {
      id: singleBike.id,
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
      image: updatedImage,
    };
  
    // Send the PATCH request to update the motorcycle details
    fetch(`/motorcycles/${singleBike.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMotorcycle),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Motorcycle updated successfully:", response);
        // Redirect to the Reviews component
        nav("reviews");
      })
      .catch((error) => {
        console.error("Error updating motorcycle:", error);
        alert("Error updating motorcycle");
      });
  };
  

  return (
    <div className="singleBike container">
      <h1>{singleBike.title}</h1>
      <div className="row">
        <div className="col-6 card bg-light me-2">
          <div>
            <h3>Motorcycle Details</h3>
            <img src={singleBike.image} className="img-fluid" alt="loading..." />
            <p>Title: {singleBike.title}</p>
            <p>Description: {singleBike.description}</p>
            <p>Price: {singleBike.price}</p>
            <p>Created At: {singleBike.created_at}</p>
            <p>Created by: {singleBike.user_id}</p>

          </div>
        </div>
        <div className="col-4 p-3 card bg-light">
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input
      type="text"
      defaultValue={singleBike.title}
      className="form-control"
      name="title" // Add the name attribute
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input
      type="text"
      defaultValue={singleBike.description}
      className="form-control"
      name="description" // Add the name attribute
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Price</label>
    <input
      type="text"
      defaultValue={singleBike.price}
      className="form-control"
      name="price" // Add the name attribute
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Image</label>
    <input
      type="text"
      defaultValue={singleBike.image}
      className="form-control"
      name="image" // Add the name attribute
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Update
  </button>
  <button onClick={handleDelete} type="button" className="btn btn-danger">
    Delete
  </button>
</form>

          <br />
        </div>
      </div>
    </div>
  );
}
