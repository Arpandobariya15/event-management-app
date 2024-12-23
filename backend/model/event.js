const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    date: { 
        type: Date, 
        required: true ,
    },
    location: { 
        type: String, 
        require: true ,
    },
    attendees: { 
        type: Number, 
        require: true 
    },
    reminder: { 
        type: Boolean, 
        default: false },

},{timestamps:true})

module.exports=mongoose.model("Events", eventSchema)
