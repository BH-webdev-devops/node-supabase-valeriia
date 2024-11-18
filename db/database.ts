import { Pool } from "pg";
import 'dotenv/config'


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: String(process.env.DB_PASSWORD),
  port: 5432,
});

export default pool;