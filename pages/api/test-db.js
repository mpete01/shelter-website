import { query } from '../lib/db';

export default async function handler(req, res) {
  try {
    // Test query to check if the connection works
    const result = await query('SELECT NOW()');
    res.status(200).json({ message: 'Database connected!', time: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Unable to connect to the database' });
  }
}
