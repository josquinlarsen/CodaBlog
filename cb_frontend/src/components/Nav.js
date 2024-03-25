import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Nav() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">home</Link>
        <Link to="/BlogPage">blog</Link>
        {/* <div><Link to="/">LogIn</Link></div> */}
    </nav>
  );
}

export default Nav;
