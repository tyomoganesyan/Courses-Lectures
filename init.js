const Database = require("better-sqlite3")
const db = new Database("courses.db")

db.exec("DROP TABLE IF EXISTS courses")

db.exec(`
CREATE TABLE IF NOT EXISTS courses(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    duration INTEGER,
    price INTEGER,
    cover TEXT
    )
    `)


 const dbL = new Database("lecturers.db")

dbL.exec("DROP TABLE IF EXISTS lecturers")

dbL.exec(`
CREATE TABLE IF NOT EXISTS lecturers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    surname TEXT,
    age INTEGER,
    profession TEXT,
    photo TEXT
    )
    `)

