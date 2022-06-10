const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser')
const helmet = require('helmet');
const connectDb  = require('./config/database');
const morgan = require('morgan');
const fs = require('fs')
const path = require('path')
const homeRoutes = require('./routes/user');


const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const accessLogStream = fs.createWriteStream(path.join(__dirname, "../log/access.log"), {flags:'a'})
app.use(morgan("combined", {stream: accessLogStream}))

app.use(morgan('combined'));

app.use('/', homeRoutes);



const port = 3002;
app.listen(port, () => {
    console.log(`Connected server in ${port}`)
    connectDb();
});


