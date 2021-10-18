import mongoose from 'mongoose'
//destract these from mongoose
const {Schema, model} =  mongoose

//create food schema
const foodSchema = Schema({
    image: {type:String, required: true},
    foodName: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    reviewsCount: {type: Number, required: true},
    ingredient: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true}

})
//creating a food model with table name of foodCollection
//named export
export const FoodModel = model('foodCollection', foodSchema)

//default export
// export default foodModel