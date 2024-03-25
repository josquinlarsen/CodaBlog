import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPage = ({ blogToEdit }) => {
 
    const [blogTitle, setBlogTitle]       = useState(blogToEdit.blogTitle);
    const [blogDate, setBlogDate]         = useState(blogToEdit.blogDate);
    const [blogText, setBlogText]         = useState(blogToEdit.blogText);
    
    const redirect = useNavigate();

    const editBlog = async () => {
        const response = await fetch(`/blogs/${blogToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                blogTitle: blogTitle, 
                blogDate: blogDate, 
                blogText: blogText
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/BlogPage");
    }

    return (
        <>
        <article>
            <h2>Edit a Post</h2>
            {/* <p>Paragraph about this page.</p> */}
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which post are you adding?</legend>
                    <label for="title">Post Title</label>
                    <input
                        type="text"
                        value={blogTitle}
                        onChange={e => setBlogTitle(e.target.value)} 
                        id="title" />
                    
                    {/* <label for="date">Date</label>
                    <input
                        type="date"
                        value={blogDate}
                        onChange={e => setBlogDate(e.target.value)} 
                        id="date" /> */}

                    <label for="blogText">Post</label>
                    <textarea
                        type="textarea"
                        value={blogText}
                        onChange={e => setBlogText(e.target.value)} 
                        id="blogText" />

                    <label for="submit">
                    <button
                        onClick={editBlog}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditPage;