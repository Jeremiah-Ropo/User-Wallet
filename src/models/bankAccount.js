const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.ObjectId,
        ref: "user",
    },
    walletId : {
        type : mongoose.ObjectId,
        ref: 'wallet',
    },
    amountNumber : {
        type : Number,
        required : true
    }
}, {timestamp:true})

const bankAccount = new mongoose.model('bankAccount', bankAccountSchema)

module.exports = bankAccount