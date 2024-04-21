import mongoose from "mongoose";
import Mongoose = require("mongoose");


interface IOffersModel extends Mongoose.Document{
    name : string;
    description : string;
    validity : string;
    image : string;
}

export {IOffersModel};