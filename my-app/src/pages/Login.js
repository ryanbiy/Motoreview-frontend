import React, { useContext, useState } from "react";
import { AuthContext } from "../components/context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
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
        <div className="col-md-10 mx-auto col-lg-5" >
          <form
            className="p-4 p-md-5 border rounded-3 bg-secondary"
            onSubmit={handleSubmit}
          >
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
            <button className="btn btn-primary w-100 py-2" type="submit" style={{ backgroundColor: '#E7C200' }}>
              Log in
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Log in, you agree to the terms of use.
              <button className="btn btn-primary w-100 py-2"  style={{ backgroundColor: '#E7C200' }}>
              <Link to="/register" className="nav-link active">
              New user?
                  </Link>
            </button> 
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;