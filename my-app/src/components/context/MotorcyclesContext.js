import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const MotorcyclesContext = createContext();

export function MotorcyclesProvider({ children }) {
  const [motorcycles, setMotorcycles] = useState([]);
  const nav = useNavigate();
  const [onchange, setOnchange] = useState(false);

  useEffect(() => {
    fetch("/allmotorcycles")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMotorcycles(data);
        } else {
          setMotorcycles([]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [onchange]);

  const addMotorcycle = (title, description, price, image, userId) => {
    return new Promise((resolve, reject) => {
      fetch("/newbike", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          price: price,
          image: image,
          user_id: userId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.success) {
            setOnchange(!onchange);
            resolve(response);
          } else if (response.error) {
            reject(response);
          } else {
            reject({ error: "Something went wrong" });
          }
        })
        .catch((error) => {
          reject({ error: "Something went wrong" });
        });
    });
  };

  const deleteMotorcycle = (id) => {
    fetch(`/deletemoto/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setOnchange(!onchange);
        console.log(response);
        nav("reviews");
        Swal.fire("Success", "Delete success", "success");
        nav("reviews");
      });
  };

  const contextData = {
    motorcycles,
    addMotorcycle,
    deleteMotorcycle,
  };

  return (
    <MotorcyclesContext.Provider value={contextData}>
      {children}
    </MotorcyclesContext.Provider>
  );
}
