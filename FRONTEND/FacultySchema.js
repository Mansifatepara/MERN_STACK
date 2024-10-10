const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        id:Number,
        name:String,
        email:String,
        mobile:Number,
        experience:Number
    }
);
module.exports = mongoose.model("FacultySchema",schema,"Faculties");