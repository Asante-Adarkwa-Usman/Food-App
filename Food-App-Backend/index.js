
import express from 'express'
import cors from 'cors'
import { FoodModel } from './models/food.js'
import {connectMongoDb} from './configs/db.js'




const app = express()

//middlewares
app.use(express.json());
app.use(cors())



const PORT = 3000 || process.env.PORT;

//calling connection function
 connectMongoDb()



//home route
app.get('/', (req, res) => {
res.send('Welcome to Foody API')
})

//get all foods
app.get('/foods', async (req, res) => {
try {
    const foodList = await FoodModel.find({})
    res.json(foodList)
    console.log('Foods fetched successfully')
} catch (error) {
    console.log(error)
    res.status(400).send(`Failed to fetch foods ${error}`)
}
})

// get one food by id
app.get('/foods/:id',async (req, res) => {
    const {id} = req.params
  try {
      const food = await FoodModel.findById(id)
      res.json(food)
      console.log('Food fetched successfully')
  } catch (error) {
      console.log(error)
      res.status(400).send(`Failed to fetch food ${error}`)
  }
})

//create food
app.post('/foods', async (req, res) => {
   try {
       const food = await FoodModel.create({...req.body})
       res.json(food)
       console.log('Food created successfully')
   } catch (error) {
    res.status(400).send(`Failed to create food ${error}`)
   }
})

//update food
app.patch('/foods/:id', async(req, res) => {
    const {id} = req.params
try {
   const updatedFood =  await FoodModel.findByIdAndUpdate(id, {...req.body})
      res.json(updatedFood)
      console.log('Food successfully updated')
} catch (error) {
    res.status(400).send(`Failed to update food ${error}`)
}
} )

// delete food
app.delete('/foods/:id', async(req, res) => {
    const {id} = req.params
try {
    await FoodModel.findByIdAndDelete(id)
    res.send('Food was deleted')
      console.log('Food successfully deleted')
} catch (error) {
    res.status(400).send(`Failed to delete food ${error}`)
}
} )




app.listen(PORT, () => console.log(`App started on Port ${PORT}`))