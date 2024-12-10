const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5121;

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sandhya$29',
    database: 'shop_db',
});

db.connect(err=> {
    if(err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/',(req,res)=>{
    res.send('Backend is running');
});

app.get('/api/products', (req,res)=>{
    db.query('select * from products', (err,results)=> {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).json({ message: 'Server Error'});
        } else {
            res.json(results);
        }
    });
});

app.listen(port, ()=>{
    console.log('Server is running on http://localhost:${port}');
});

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Sandhya:<db_password>@cluster0.bgrlu.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>console.log('MongoDB Connected'))
  .catch(err=> console.log(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Backend is running');
});
 

app.get('/api/products', (req, res) => {
    const products = [
        {id:1, title: ' Womens Wear', price:150 },
        {id:2, title: 'Mens Wear', price:110 },
    ];
    res.json(products);
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});