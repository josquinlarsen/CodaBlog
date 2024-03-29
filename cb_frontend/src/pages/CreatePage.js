import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const CreatePage = () => {

    function getDate() {
        const today = new Date();
        const month = today.toLocaleString('default', { month: 'long'});
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date} ${month} ${year}`
    }

    const [blogTitle, setBlogTitle]       = useState('');
    const [blogDate, setBlogDate]         = useState(getDate());
    const [blogText, setBlogText]         = useState('');
    
    const redirect = useNavigate();

    const addBlog = async () => {
        const newBlog = { blogTitle, blogDate, blogText };
        const response = await fetch('/blogs', {
            method: 'post',
            body: JSON.stringify(newBlog),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Your post has been succesfully created`);
            redirect("/");
        } else {
            alert(`There's been an issue. Try again later = ${response.status}`);
            redirect("/BlogPage");
        }
    };

    return (
        <>
        <article>
            <h2>Create Post</h2>
            <div size="36" class="spacer"></div>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What are your thoughts today?</legend>
                    <label for="title">Title</label>
                    <input
                        type="text"
                        placeholder="post title"
                        value={blogTitle}
                        onChange={e => setBlogTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="blogText">Content</label>
                    <textarea
                        type="textarea"
                        placeholder="type here..."
                        value={blogText}
                        onChange={e => setBlogText(e.target.value)} 
                        id="blogText" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addBlog}
                        id="submit"
                    >Post!</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;