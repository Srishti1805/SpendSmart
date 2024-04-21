import Mongoose = require("mongoose");


interface IUserModel extends Mongoose.Document{
    fname : string;
    lname : string;
    email : string;
    password : string;
}

export {IUserModel};