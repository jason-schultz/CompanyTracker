import mongoose, { Schema } from 'mongoose'

var PersonSchema = new Schema({
    name: String,
    companyId: String,
    email: String
})

mongoose.model('Person', PersonSchema)