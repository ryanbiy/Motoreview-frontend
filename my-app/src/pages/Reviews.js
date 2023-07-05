import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MotorcyclesContext } from "../components/context/MotorcyclesContext";

function Reviews() {
  const { motorcycles } = useContext(MotorcyclesContext);

  return (
    <div>
      <h1 className="text-center">View your reviews</h1>
      <h1 className="text-center">- - - - - - - - - - - - -</h1>
      <div className="container-fluid row">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 d-flex justify-content-evenly">
          {motorcycles &&
            motorcycles.map((motorcycle) => (
              <div
                key={motorcycle.id}
                className="card container row"
                style={{ width: "16rem" }}
              >
                <img
                  src={motorcycle.image}
                  className="card-img-top"
                  alt="In Africa, We ride Zebra"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{motorcycle.title}</h5>
                  <p className="card-text">{motorcycle.description}</p>
                  <Link
                    to={{
                      pathname: `/reviews/${motorcycle.id}`,
                      state: { motorcycle },
                    }}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
