// Models for the Blog Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Oh no! We have a problem. We could not connect to the MongoDB Atlas Cluster server..' });
    } else  {
        console.log('Yes! The database has succesfully connected to the MongoDB Atlas Cluster.');
    }
});

// SCHEMA: Define the collection's schema.
const blogSchema = mongoose.Schema({
	blogTitle:    { type: String,  },
	blogDate:     { type: Date, required: true },
	blogText: { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "blogs".
const blogs = mongoose.model('Blogs', blogSchema);


// CREATE model *****************************************
const createBlog = async (blogTitle, blogDate, blogText) => {
    const blog = new blogs({ 
        blogTitle: blogTitle, 
        blogDate: blogDate, 
        blogText: blogText 
    });
    return blog.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveBlogs = async () => {
    const query = blogs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveBlogByID = async (_id) => {
    const query = blogs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteBlogById = async (_id) => {
    const result = await blogs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateBlog = async (_id, blogTitle, blogDate, blogText) => {
    const result = await blogs.replaceOne({_id: _id }, {
        blogTitle: blogTitle,
        blogDate: blogDate,
        blogText: blogText
    });
    return { 
        _id: _id, 
        blogTitle: blogTitle,
        blogDate: blogDate,
        blogText: blogText
    }
}

// EXPORT the variables for use in the controller file.
export { createBlog, retrieveBlogs, retrieveBlogByID, updateBlog, deleteBlogById }