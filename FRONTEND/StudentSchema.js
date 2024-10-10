const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name:String,
        id:Number,
        email:String,
        mobile:Number,
        standard:Number,
        class:String
    }
);
module.exports = mongoose.model("StudentSchema",schema,"Students");