import express, { Express } from 'express'
import { connectToDB } from './db/connection'
import cors from 'cors'
import router from './routes/task'
import dotenv from 'dotenv'

dotenv.config()
connectToDB()

const app: Express = express()
// app.use(
//   cors({
//     credentials: true,
//     origin: 'http://127.0.0.1:5173/',
//   })
// )
app.use(cors())
app.use(express.json())
app.use('/api', router)

const PORT: string | number = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
