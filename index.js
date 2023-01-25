const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const authController = require('./controllers/auth');
const commentController = require('./controllers/comment');
const postController = require('./controllers/post');
const userController = require('./controllers/user');
const app = express();
// const http=require('http');

// connect db
mongoose.connect(process.env.MONGO_URL, () => console.log('Db is connected successfully'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/auth', authController);
app.use('/user', userController);
app.use('/post', postController);
app.use('/comment', commentController);

// const server =http.createServer((req,res)=>{
//     res.end('HELLO');
// });
// const PORT=5000;
// server.listen(5000);
// console.log("SERVER CONNECTED");


// // connect server
app.listen(process.env.PORT, () => console.log('Server is connected successfully'));

module.exports = app;
// module.exports(app);