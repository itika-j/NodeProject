const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    rollno:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    score:{
        type: Number,
        required: true
    }
})

const ResultDb = mongoose.model('resultDb',schema);

module.exports=ResultDb;