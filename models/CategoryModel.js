"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class CategoryModel {
    constructor(dbConnectionString) {
        this.dbConnectionString = dbConnectionString;
        this.createSchema();
        this.createModel();
    }
    createModel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await Mongoose.connect(this.dbConnectionString,{
                //     useNewUrlParser : true , useUndefinedTopology : true
                // })
                this.model = mongooseConnection.model("category", this.schema);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    createSchema() {
        this.schema = new Mongoose.Schema({ userId: String, name: String, description: String }, { collection: "category" });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.find().exec();
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    getAllCategoriesByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.find({ userId }).exec();
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    getOneCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.findById(id).exec();
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    createCategory(categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = new this.model(categoryData);
                return yield category.save();
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    updateCategory(categoryId, categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.model.findByIdAndUpdate(categoryId, categoryData, { new: true });
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.model.findByIdAndDelete(categoryId);
                return !!result;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
exports.CategoryModel = CategoryModel;
