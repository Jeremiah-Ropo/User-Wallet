const mongoose = require('mongoose');
const ip = require('ip');

const userSchema = new mongoose.Schema({
    token: {
        type : String,
        required : true
    },
    ipAddress : {
        type : String,
        default: ip.address()
    }
}, {timestamp:true})

const User = new mongoose.model('user', userSchema)

module.exports = User