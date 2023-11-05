import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./src/database/database.db')

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL
  )`)
})

export  { db }
