import mongoose from "mongoose";
import Mongoose = require("mongoose");


interface ICategoryModel extends Mongoose.Document{
    userId : mongoose.Types.ObjectId;
    name : string;
    description : string;
}

export {ICategoryModel};