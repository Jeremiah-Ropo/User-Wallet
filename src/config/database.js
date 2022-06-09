const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const url = process.env.MONGO_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log(`Connected to database`);
    } catch (error) {
        console.log(error.message || new Error('Not connected'));
        process.exit(1);
    }
}

module.exports = connectDb