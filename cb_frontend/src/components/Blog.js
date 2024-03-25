import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function getDate() {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long'});
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date} ${month} ${year}`
}


function Blog({ blog, onEdit, onDelete }) {
    return (
        <section class="blogblock">
            <div>
            <h3 class="blogtitle">{blog.blogTitle}</h3>
            <article id="blogPosts">
                {blog.blogText}
            </article>        
            <p>{getDate(blog.blogDate)}</p>
            <div class="icons">
            <i alt="Delete Post"><MdDeleteForever onClick={() => onDelete(blog._id)} /></i>
            <i alt="Edit Post"><MdEdit onClick={() => onEdit(blog)} /></i></div>
            </div>
        </section>
    );
}

export default Blog;