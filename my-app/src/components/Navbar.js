import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function Navbar() {
  const { current_user, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success-subtle " style={{ backgroundColor: "#edd311" }}>
        <div className="container">
          <Link to="/" className="navbar-brand fs-3">
            <strong>Motoreview</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              {/* {current_user && current_user ? ( */}
              <>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reviews" className="nav-link active">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addbike" className="nav-link">
                    AddBike
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/profile"
                    className="nav-link active dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/profile"
                        className="dropdown-item"
                        href="#"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active">
                    Register
                  </Link>
                </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={() => logout()}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </>
              {/* ) : ( */}
              <>
                {/* <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active">
                    Register
                  </Link>
                </li> */}
              </>
              {/* )} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;