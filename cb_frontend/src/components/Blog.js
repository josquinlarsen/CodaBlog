import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';

function getDate() {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long'});
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date} ${month}, ${year}`
}


function Blog({ blog, onEdit, onDelete }) {
    return (
        <section class="blogblock">
            <div>
            <h3 class="blogtitle">{blog.blogTitle}</h3>
            <article id="blogPosts">
                {blog.blogText}
            </article>        
            <p>{blog.blogDate.slice(0,10)}</p>
            <div class="icons">
            <i alt="Delete Post"><MdDeleteForever onClick={() => onDelete(blog._id)} /></i>
            <i alt="Edit Post"><MdEdit onClick={() => onEdit(blog)} /></i></div>
            </div>
        </section>
     
        //     {/* Update these icons to something that matches your style. */}
        //     <td><MdDeleteForever onClick={() => onDelete(blog._id)} /></td>
        //     <td><MdEdit onClick={() => onEdit(blog)} /></td>
        // </tr>
    );
}

export default Blog;