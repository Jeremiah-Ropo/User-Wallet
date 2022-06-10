const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    userId : {
        type : Schema.ObjectId,
        ref : "user",
        required: true,
    },
    status: {
        type : Boolean,
        default : "new",
        enum:["new", "active"],
        required:true
    },
    balance: {
        type : [
            {
               totalAmount:{type: Number, required:true},
               verify: {type:Boolean, required:true, default:false},
               _id:false
            }
        ],
        required : true
    },

    deposit : {
        type : [
            {
                amount : {type:Number, required:true},
                method: {type:String, required:true},
                status: {type:String, enum:["new", "done"], default:"new"},
                time: {type: Number},
                _id:false
            }
        ],
        createdAt : {
            type : Date,
            default: new Date()
        }
    },

    withdrawal : {
        type : [
            {
                amount:{type: Number, required:true},
                method: {type: String, required:true},
                status: {type:String, enum:["new", "done"], default:"new"}
            } 
        ],
        createdAt : {
            type : Date,
            default: new Date()
        }
    }


})

const wallet = new mongoose.model('wallet', walletSchema)

module.exports = wallet