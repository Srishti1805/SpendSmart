import mongoose from "mongoose";
import Mongoose = require("mongoose");


interface IBudgetModel extends Mongoose.Document{
    userId : mongoose.Types.ObjectId;
    categoryId : mongoose.Types.ObjectId;
    type : string;
    amount : number;
    date : Date;
    note : string;
}

export {IBudgetModel};