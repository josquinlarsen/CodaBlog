import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// function RecentBlogs( {setBlog}) {
//     const redirect = useNavigate();

//     const [blogs, setBlogs] = useState([]);

//     const loadRecentBlogs = async () => {
//         const response = await fetch('/blogs');
//         const blogs = await response.json();
//         setBlogs(blogs);
//     }
// }

function HomePage () {
    return (
        <>
        
        <div>
        <h2 class="pagetitle">recent posts</h2>
        </div>
        <div size="36" class="spacer"></div>
        <section>
        <article>
            <p>Lorem ipsum</p>
        </article>
        </section>
        </>
    );
}

export default HomePage;

