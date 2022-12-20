import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
  const [email, setEmail] = useState('');
  const {logIn} = useContext(AuthContext);

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
        <label htmlFor="email">Email
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor="password">Wachtwoord
          <input type="password" id="password"/>
        </label>
        <button
          onClick={() => logIn(email)}
        >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;