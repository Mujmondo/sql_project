const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
require('dotenv').config()


// initializing app
const app = express()


// connecting to db
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mujmondo",
    database: "Library"
})


// middlewares
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

// routes
// books get
app.get('/books', (req, res)=> {
    const q = "SELECT * FROM library.book"
    db.query(q, (err, data)=> {
        if (err) return res.json(err)
        return res.json(data)
    })
})
// books post
app.post('/books', (req, res)=> {
    const q = "INSERT INTO book(`ISBN`, `title`, `category`, `publicationYear`) VALUES(?)"
    const {isbn, title, category, publicationYear} = req.body
    const values = [
        isbn,
        title,
        category,
        publicationYear
    ]
    db.query(q, [values], (err, data)=> {
        if (err) return res.json(err)
        return res.json("Book has been published successfully.")
    })
})

app.listen(4000, ()=> {
    console.log('listening to requests on port 4000')
})