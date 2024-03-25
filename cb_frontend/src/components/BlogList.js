import React from 'react';
import Blog from './Blog';


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

    );
}

export default BlogList;
