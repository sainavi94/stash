const http = require('http');
const express = require('express');
const app = express();
const dbConnect = require('../stash/config/dbConnect')
const dotenv = require('dotenv').config();
const PORT = 5000
const authRouter = require('./Routers/authRoute');
const { errorHandler, notFound } = require('./Middleware/errorHandler');

dbConnect();
app.use(express.json())



app.use('/api/user', authRouter)





app.use(errorHandler);
app.use(notFound)
app.listen(PORT, ()=>{
    console.log(`Server is running succeessfully at : ${PORT}`);
});