import express from 'express'
import cors from 'cors'
const port = process.env.PORT || 8080

import {db} from './database/db.js'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/email', (req, res) => {
  const { email } = req.body

    db.run(`INSERT INTO users (email) VALUES (?)`, [email], function(err) {
      if (err) {
        console.error(err)
        return res.status(500).send('Internal server error')
      }
  })
})

app.get('/email', (req, res) => {
  
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Internal server error')
    }
    return res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

