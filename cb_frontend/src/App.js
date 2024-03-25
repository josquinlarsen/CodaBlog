// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import coda from '/Users/josquin/Desktop/CodaBlog/frontend/src/images/coda-close.png';

// Import Components, styles, media
import Nav from './components/Nav';
import './App.css';
// import LoginPage from './components/Login';
// import Logout from './components/Logout';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

// Define the function that renders the content in Routes, using State.
function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false); //user not logged in

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setIsLoggedIn(false);
  // };

  const [blog, setBlogToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <div class="navbar">
            <div><h1>CodaBlog</h1></div>

            {/* <nav clasName = "App-nav">
              {isLoggedIn ? (
                <>
                <Nav />
                </>

              ) : (
                <>
                <Link to='/'>Home</Link>
                <Link to='/BlogPage'>Blog</Link>
                <div><Link to='/'></Link> LogIn</div>
                </>
              )}
            </nav> */}
             <Nav />
            <div class="codapic"><img src={coda}/></div>
            </div>
          </header>
          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage /> } />
                    
                    <Route path="/BlogPage" element={<BlogPage setBlog={setBlogToEdit}/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}

                     <Route path="/create" element={<CreatePage />} />   
                     <Route path="/update" element={<EditPage blogToEdit={blog} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy;2024 JL</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;