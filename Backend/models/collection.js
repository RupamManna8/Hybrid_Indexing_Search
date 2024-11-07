const mongoose = require("mongoose");

const Details = mongoose.Schema({
    Place:String,
    Details:String,
    Pictures:{
        pic1:String,
        pic1:String,
        pic1:String
    },
    Price:Number,
    Duration:String,
    From:String,
    Hotel:{
        hotel1:String,
        hotel2:String
    },
    Default:String
});

let PlaceCollection = mongoose.model("places",Details);

module.exports = PlaceCollection;