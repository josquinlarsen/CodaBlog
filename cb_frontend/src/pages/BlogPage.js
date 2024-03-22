import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';

function BlogPage({ setBlog }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [blogs, setBlogs] = useState([]);

    // RETRIEVE the entire list of blogs
    const loadBlogs = async () => {
        const response = await fetch('/blogs');
        const blogs = await response.json();
        setBlogs(blogs);
    } 
    
    
    // UPDATE a single blog
    const onEditBlog = async blog => {
        setBlog(blog);
        redirect("/update");
    }


    // DELETE a single blog  
    const onDeleteBlog = async _id => {
        const response = await fetch(`/blogs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/blogs');
            const blogs = await getResponse.json();
            setBlogs(blogs);
        } else {
            console.error(`There was a problem deleting ${_id}, status code = ${response.status}. Please try again later`)
        }
    }

    // LOAD all the blogs
    useEffect(() => {
        loadBlogs();
    }, []);

    // DISPLAY the blogs
    return (
        <>
            <div>
            <h2 class="pagetitle">Posts</h2>
            </div>
            <div size="36" class="spacer"></div>
            
            {/* <Link to="/create">Add </Link> */}
            <BlogList 
                blogs={blogs} 
                onEdit={onEditBlog} 
                onDelete={onDeleteBlog} 
            />
        </>
    );
}

export default BlogPage;