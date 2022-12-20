import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const {isAuth, user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(isAuth);

  return (
    <nav>
      <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
      </Link>

      <div>
        {!isAuth ?
          <>
            <button
              type="button"
              onClick={() => navigate('/signin')}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
            >
              Registreren
            </button>
          </>
          :
          <>
            <span>
              <h5>{user}</h5>
            </span>
            <button
              type="button"
              onClick={logOut}
            >Log uit
            </button>
          </>
        }
      </div>
    </nav>
  );
}

export default NavBar;