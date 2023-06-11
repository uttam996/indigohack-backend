const mongoose = require('mongoose');


const MyBookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    travelDate:{
        type:Number,
        required:true
    },
    amt:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});


module.exports = mongoose.model('MyBooking', MyBookingSchema);