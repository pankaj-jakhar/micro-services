import dotenv from 'dotenv'
dotenv.config()

export const ENVIRONMENT: string = process.env.ENVIRONMENT
export const PORT: number = parseInt(process.env.PORT) || 3000
