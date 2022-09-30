import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section>
      <h1 id="errorTitle">This page doesn't exist or is still under development...</h1>
      <p id="return">Please return back to our site</p>
      <Link to='/' style={{textDecoration: 'none', color: 'white'}}><button id="goBack">Back Home</button></Link>
    </section>
  );
}

export default Error;