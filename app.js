const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const path = require('path');
const ejs = require('ejs');

const userRoutes = require('./routes/user');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => {
    res.render('login');
});

app.use(userRoutes);



app.listen(3000, () => {
    console.log("Server is uptoup and running upto port 3000");
});