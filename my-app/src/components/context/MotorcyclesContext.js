import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

export const MotorcyclesContext = createContext();

export function MotorcyclesProvider({ children }) {
  const [motorcycles, setMotorcycles] = useState([]);
  const nav = useNavigate();
  const [onchange, setOnchange] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/bikes`)
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

  const addMotorcycle = (title, description, image, userId) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/bikes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: title,
          description: description,
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
