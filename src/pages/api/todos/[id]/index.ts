import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/database/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { title, completed } = req.body;
    
    if (!title && completed === undefined) {
      res.status(400).json({ error: 'At least one of title or completed must be provided' });
      return;
    }

    const data = [];
    let sql = 'UPDATE todos SET ';

    if (title !== undefined) {
      sql += 'title = ?, ';
      data.push(title);
    }
    if (completed !== undefined) {
      sql += 'completed = ?, ';
      data.push(completed ? 1 : 0);  // SQLite does not support boolean, so convert to 0 or 1.
    }

    sql = sql.slice(0, -2);  // Remove the last comma and space.
    sql += ' WHERE id = ?';
    data.push(id);

    db.run(sql, data, function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      res.status(200).json({ message: 'Todo updated', id, changes: this.changes });
    });
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
