const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const URI = process.env.REACT_APP_ATLAS_URI;

const mongoose = require("mongoose");

const connectDB = async () => {
   await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
   console.log("db has been connected");
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
const router = require('./routes/apiRoutes');

app.use('/api', router);

const port = process.env.REACT_APP_PORT ;

app.listen(port, () => {
    console.log(`Server is running on ${port} `)
});



