import dotenv from 'dotenv'
import mongoose from 'mongoose'

//dotenv
dotenv.config()


const db = process.env.DB_URL


export async function connectMongoDb(){
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(`Unable to connect to MongoDB ${error}`)
    }
}