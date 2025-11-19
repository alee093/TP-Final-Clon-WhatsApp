import ENVIRONMENT from "./config/environment.config.js"
import connectToMongoDB from "./config/mongoDB.config.js"
import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.router.js"

connectToMongoDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

app.listen(ENVIRONMENT.PORT, () => console.log(`Server corriendo en puerto:  ${ENVIRONMENT.PORT}`))