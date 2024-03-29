import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Blog({ blog, onEdit, onDelete }) {
    function getDate() {
        const today = new Date(blog.blogDate);
        const month = today.toLocaleString('default', { month: 'long'});
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date} ${month} ${year}`
        
    }

    return (
        <section class="blogblock">
            <div>
            <h3 class="blogtitle">{blog.blogTitle}</h3>
            <article id="blogPosts">
                {blog.blogText}
            </article>        
            <p>{getDate()}</p>
            <div class="icons">
            <i alt="Delete Post"><MdDeleteForever onClick={() => onDelete(blog._id)} /></i>
            <i alt="Edit Post"><MdEdit onClick={() => onEdit(blog)} /></i></div>
            </div>
        </section>
    );
}

export default Blog;