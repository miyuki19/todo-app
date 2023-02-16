import mongoose from 'mongoose'

//in mongo 6 useNewUrlParser, useUnifiedTopology: true is no longer neccessary
export const connectToDB = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI || '')
    console.log('Connected to database')
  } catch (error) {
    console.log('Could not connect to database.', error)
    throw error
  }
}
