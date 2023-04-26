import React from 'react';
import Logo from '../../images/V3_Logo.png';

function NavBar () {
  return (
    <div className="NavBar">
      <button>Variables</button>
      <button>Arrays</button>
      <button>Functions</button>
        <div className="logo">
            <img src= {Logo} alt="logo" />
        </div>

      <button>Test Yourself</button>
    </div>
  )
}


export default NavBar;