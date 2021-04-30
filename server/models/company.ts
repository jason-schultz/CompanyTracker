import mongoose, { Schema } from "mongoose";

var CompanySchema = new Schema({
    name: String,
    address: String,
    revenue: Number,
    phone: String
})

mongoose.model('Company', CompanySchema)