const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    mobile:{
        type:Number,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model('User', userSchema)