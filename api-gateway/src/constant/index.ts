import dotenv from 'dotenv'
dotenv.config()

export const ENVIRONMENT: string = process.env.ENVIRONMENT
export const PORT: number = parseInt(process.env.PORT) || 3000

export const PGUSER: string = process.env.PGUSER 
export const PGHOST: string = process.env.PGHOST
export const PGPASSWORD: string = process.env.PGPASSWORD
export const PGDATABASE: string = process.env.PGDATABASE
export const PGPORT: number = parseInt(process.env.PGPORT) || 5432