import { query } from '../lib/db';

export default async function handler(req, res) {
  try {
    // Test query to check if the connection works
    const result = await query('SELECT * from animals');
    res.status(200).json({ res: result.rows });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Unable to connect to the database' });
  }
}
