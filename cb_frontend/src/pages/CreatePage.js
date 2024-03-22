import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const CreatePage = () => {

    const [blogTitle, setBlogTitle]       = useState('');
    const [blogDate, setBlogDate]         = useState('');
    const [blogText, setBlogText] = useState('');
    
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
            alert(`helpful adding message`);
            redirect("/");
        } else {
            alert(`helpful adding message = ${response.status}`);
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
                    
                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={blogDate}
                        placeholder="Post's date"
                        onChange={e => setBlogDate(e.target.value)} 
                        id="date" />

                    <label for="blogText">Content</label>
                    <input
                        type="textarea"
                        placeholder="type here..."
                        value={blogText}
                        onChange={e => setBlogText(e.target.value)} 
                        id="language" />

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