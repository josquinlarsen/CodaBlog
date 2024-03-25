import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import RecentBlogList from '../components/RecentBlogList';

function HomePage({ setBlog }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [blogs, setBlogs] = useState([]);

    // RETRIEVE the entire list of blogs
    const loadRecentBlogs = async () => {
        const response = await fetch('/blogs');
        const blogs = await response.json();
        setBlogs(blogs.reverse());
    } 

useEffect(() => {
    loadRecentBlogs();
}, []);

    return (
        <>
        
        <div>
        <h2 class="pagetitle">recent posts</h2>
        </div>
        <div size="36" class="spacer"></div>
        <section>
        <article>
            <RecentBlogList
            blogs={blogs.reverse().slice(0,2)} />
           
        </article>
        </section>
        </>
    );
}

export default HomePage;

