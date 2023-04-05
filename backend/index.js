const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: "password",
    database: 'productDB'
});

db.connect(err => {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});


app.get("/", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/", (req, res) => {
    const q = "INSERT INTO products(`title`, `descrp`, `price`, `image`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.price,
        req.body.descrp,
        req.body.image,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend. on port 8800");
});