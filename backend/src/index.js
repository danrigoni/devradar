const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://danrigoni1:niel1982@cluster0-otwqj.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
});


app.use(express.json());
app.use(routes); 

app.listen(3333);