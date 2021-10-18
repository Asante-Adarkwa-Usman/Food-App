import mongoose from 'mongoose'
//destract these from mongoose
const {Schema, model} =  mongoose

//create food schema
const userAuthSchema = Schema({
    username: {type:String, required: true},
    email: {type:String, required: true},
    password: {type: String, required: true},
    confirm_password: {type: String, required: true},

})
//creating a food model with table name of foodCollection
//named export
export const UserAuthModel = model('users', userAuthSchema)
