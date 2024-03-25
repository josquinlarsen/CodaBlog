import React from 'react';
import RecentBlog from './RecentBlog';


function RecentBlogList({ blogs }) {
    return (
        <section> 
            <article id="blogs">
            {blogs.map((blog, i) => 
                    <RecentBlog 
                        blog={blog} 
                        key={i}
                    />)}
            </article>
        </section>

    );
}

export default RecentBlogList;