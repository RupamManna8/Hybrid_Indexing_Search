const mongoose = require("mongoose");

const Details = mongoose.Schema({
    Name:String,
    Gmail:String,
    Password:String,
    Avtar:String,
    Cart:[
        {
            Product: String,
            Image: String,
            Price: Number,
        }
    ],
    Address:[
        {
            Street:String, 
            City:String,
            State:String,
            ZipCode:Number 
        }
    ],
    OrderHistory:[
        {
            Product: String,
            Image: String,
            Price: Number,
        }
    ],
});

let UserCollection = mongoose.model("user",Details);

module.exports = UserCollection;