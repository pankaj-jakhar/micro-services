import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from "../constant"
import { Pool } from "pg"
 
const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: PGPORT,
})
 
export default pool