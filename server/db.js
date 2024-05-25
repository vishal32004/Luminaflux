require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})
const checkConnection = async () => {
    try {
        await pool.query('SELECT 1')
        console.log('Database connected successfully')
    } catch (err) {
        console.error('Error connecting to the database:', err.message)
        process.exit(1)
    }
}
checkConnection()
module.exports = pool
