import React from 'react';




function RecentBlog ({ blog }) {
    function getDate() {
        const today = new Date();
        const month = today.toLocaleString('default', { month: 'long'});
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date} ${month}, ${year}`
    }
    
    return (
    
        <section class="blogblock">
            <div>
            <h3 class="blogtitle">{blog.blogTitle}</h3>
            <article id="blogPosts">
                {blog.blogText}
            </article>        
            {/* <p>{blog.blogDate.slice(0,10)}</p> */}
            <p>{getDate(blog.blogDate)}</p>
            </div>
        </section>
        
    );
}

export default RecentBlog;
