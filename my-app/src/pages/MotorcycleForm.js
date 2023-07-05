// import React, { useEffect, useState } from 'react';

// function MotorcycleForm({ id }) {
//   const [motorcycle, setMotorcycle] = useState(null);
//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   useEffect(() => {
//     fetch(`/motorcycles/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setMotorcycle(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, [id]);

//   const handleClick = () => {
//     setIsButtonClicked(true);
//   };

//   if (!motorcycle) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {isButtonClicked ? (
//         <div>
//           <h3>Motorcycle Details</h3>
//           <p>Title: {motorcycle.title}</p>
//           <p>Description: {motorcycle.description}</p>
//           <p>Price: {motorcycle.price}</p>
//           <img src={motorcycle.image} alt={motorcycle.title} />
//         </div>
//       ) : (
//         <button onClick={handleClick} type="button" className="btn btn-primary">
//           Show Details
//         </button>
//       )}
//     </div>
//   );
// }
// export default MotorcycleForm;
import React, { useEffect, useState } from "react";

function MotorcycleForm({ motorcycle }) {
    // const { motorcycle } = useContext(MotorcyclesContext);

  if (!motorcycle) {
    return <p>Loading...</p>;
  }

  return (
    <div>
     
        <div>
          <h3>Motorcycle Details</h3>
          <p>Title: {motorcycle.title}</p>
          <p>Description: {motorcycle.description}</p>
          <p>Image: {motorcycle.image}</p>
          <p>Created At: {motorcycle.created_at}</p>
          <img src={motorcycle.image} className="img-fluid" alt="loading..." />
        </div>
     
    </div>
  );
}

export default MotorcycleForm;
