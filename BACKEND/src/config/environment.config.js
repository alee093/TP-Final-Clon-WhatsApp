import dotenv from 'dotenv'

dotenv.config()

const ENVIRONMENT = {
    PORT: process.env.PORT,
    MONGO_DB_HOST: process.env.MONGO_DB_HOST,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    URL_FRONTEND: process.env.URL_FRONTEND || 'http://localhost:3000' 
}

export default ENVIRONMENT