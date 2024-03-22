import React from 'react';
import Blog from './Blog';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function BlogList({ blogs, onDelete, onEdit }) {
    return (
        <section> 
            <article id="blogs">
            {blogs.map((blog, i) => 
                    <Blog 
                        blog={blog} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </article>
        </section>
    
        // <table id="blogs">
        //     <caption>Add and Edit Posts</caption>
        //     <thead>
        //         <tr>
        //             <th>Title</th>
        //             <th>Year</th>
        //             <th>Language</th>
        //             <th>Delete</th>
        //             <th>Edit</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {blogs.map((blog, i) => 
        //             <Blog 
        //                 blog={blog} 
        //                 key={i}
        //                 onDelete={onDelete}
        //                 onEdit={onEdit} 
        //             />)}
        //     </tbody>
        // </table>
    );
}

export default BlogList;
