const { AsyncResource } = require('async_hooks');
const User = require('../models/userModel');


const asyncHandler = require('express-async-handler');




const createUser = asyncHandler(async(req, res) => {

    const email = req.body.email;
    console.log(req.body)

    const findUser = await User.findOne({email:email});

    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser)
    }
    else{
        throw new Error('User already Exists')
    }
});

module.exports = {createUser}