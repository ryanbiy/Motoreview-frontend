import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/context/AuthContext';
import { Link } from 'react-router-dom';

function Register() {
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        // console.log(data.error);
        if (data.success) {
            // Login successful, perform necessary actions (e.g., redirect, update user state)
            setMessage(data.success);
             console.log('Signup successfull');
          } else if (data.error) {
            // Login unsuccessful, display error message to the user
            setMessage(data.error);
            console.log('Login unsuccessful:', data.error);
          } else if (data.warning) {
            // Missing fields, display warning message to the user
            setMessage(data.warning);
            console.log('Missing fields:', data.warning);
          }
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <div
    className="container col-xl-10 col-xxl-8 px-4 py-5"
    style={{
      // backgroundImage:
      //   "url(https://images.unsplash.com/photo-1566041510632-30055e21a9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="row align-items-center g-lg-5 py-5">
    <div className="col-md-10 mx-auto col-lg-5">
    <form className="p-4 p-md-5 border rounded-3 bg-secondary"
    onSubmit={handleSubmit} action="#" method="POST" >
      
      <h1 className="h3 mb-3 fw-normal">Signup Here!</h1>

      <div className="form-floating mb-3">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          id="floatingInput"
          placeholder="Name"
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit" style={{ backgroundColor: '#E7C200' }}>
        Sign Up
      </button>
      <hr className="my-4" />
      <button className="btn btn-primary w-100 py-2" type="submit" style={{ backgroundColor: '#E7C200' }}>
              <Link to="/login" className="nav-link active">
              I already have an account
                  </Link>
            </button>
    </form>
    </div>
      </div>
      </div>
  );
}

export default Register;