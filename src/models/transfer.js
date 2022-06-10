const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
    userId : {
        type : mongoose.ObjectId,
        required: true
    },
    amount : {
        type : Number,
        required : true
    },
    status : {
        type: Number,
        default: false
    },
    to : {
        type: String
    },
    from: {
        type: String
    }
}, {timestamp:true})

const transfer = new mongoose.model('transfer', transferSchema)

module.exports = transfer