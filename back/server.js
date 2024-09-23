const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter');
const UploadRouter = require("./router/uploadRouter");
const cors = require('cors');
require('dotenv').config();  // Add this line

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],  
}));

mongoose.connect('mongodb://127.0.0.1:27017/mern-app')
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => {
    console.log(err);
  });

app.use('/users', userRouter);
app.use('/upload', UploadRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
