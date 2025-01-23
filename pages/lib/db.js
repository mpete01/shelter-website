const { Pool } = require('pg')

// Create a connection pool using the DATABASE_URL environment variable
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for Neon
    },
});
  
// Helper function for making queries
const query = (text, params) => {
    return pool.query(text, params);
};
  
module.exports = { query };