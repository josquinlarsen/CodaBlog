// Controllers for the Blog Collection

import 'dotenv/config';
import express from 'express';
import * as blogs from './blogs-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/blogs', (req,res) => { 
    blogs.createBlog(
        req.body.blogTitle, 
        req.body.blogDate, 
        req.body.blogText
        )
        .then(blog => {
            console.log(`"${blog.blogTitle}" has been posted!`);
            res.status(201).json(blog);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The blog was not posted.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/blogs', (req, res) => {
    blogs.retrieveBlogs()
        .then(blogs => { 
            if (blogs !== null) {
                console.log(`All posts were retrieved from the collection.`);
                res.json(blogs);
            } else {
                res.status(404).json({ Error: 'We are unable to retrieve that URL.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There has been a mistake. Resubmit your request (check your spelling!).' });
        });
});


// RETRIEVE by ID controller
app.get('/blogs/:_id', (req, res) => {
    blogs.retrieveBlogByID(req.params._id)
    .then(blog => { 
        if (blog !== null) {
            console.log(`"${blog.blogTitle}" has been found based on its ID.`);
            res.json(blog);
        } else {
            res.status(404).json({ Error: 'Unable to find a post with that ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'There has been some kind of typo. Please try again.' });
    });

});


// UPDATE controller ************************************
app.put('/blogs/:_id', (req, res) => {
    blogs.updateBlog(
        req.params._id, 
        req.body.blogTitle, 
        req.body.blogDate, 
        req.body.blogText
    )
    .then(blog => {
        console.log(`"${blog.blogTitle}" was updated.`);
        res.json(blog);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'There has been a problem. Plese verify your request.' });
    });
});


// DELETE Controller ******************************
app.delete('/blogs/:_id', (req, res) => {
    blogs.deleteBlogById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} blog was deleted.`);
                res.status(200).send({ Success: 'The post has been deleted.' });
            } else {
                res.status(404).json({ Error: 'Your request was unable to be processed. Check the ID and try again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Resend your request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});