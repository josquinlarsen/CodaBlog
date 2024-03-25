import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <Link to="/">home</Link>
        <Link to="/BlogPage">blog</Link>
        {/* <div><Link to="/">LogIn</Link></div> */}
    </nav>
  );
}

export default Nav;
