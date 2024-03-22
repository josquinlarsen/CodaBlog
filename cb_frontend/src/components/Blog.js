import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Blog({ blog, onEdit, onDelete }) {
    return (
        <section class="blogblock">
            <div>
            <h3 class="blogtitle">{blog.blogTitle}</h3>
            <article id="blogPosts">
                {blog.blogText}
            </article>
            <p>{blog.blogDate.slice(0,10)}</p>
            </div>
        </section>
     
        //     {/* Update these icons to something that matches your style. */}
        //     <td><MdDeleteForever onClick={() => onDelete(blog._id)} /></td>
        //     <td><MdEdit onClick={() => onEdit(blog)} /></td>
        // </tr>
    );
}

export default Blog;