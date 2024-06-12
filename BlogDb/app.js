const express = require('express');
const cors = require('cors');
const blogDataBaseConnection = require('./src/Config/blogDbConnection');
const blogRouter = require('./src/Routes/blogRoutes');
require('dotenv').config();
const app = express();

//Middleware to allow your frontend application to make requests to the backend API.
app.use(
    cors({
        origin : ["http://localhost:5173"],
        methods : ["GET", "POST", "PUT", "DELETE"],
        credentials : true
    })
);

//Parsing the incoming data from the requests
app.use(express.json());

//Blog Database Connection
blogDataBaseConnection();


//Using the main router of our application (API)
app.use('/blogs',blogRouter);

//Staring the server
const PORT = process.env.PORT || 3000;
app.listen(PORT , () =>{
    console.log(`Server is listening on ${PORT}`);
});