const  express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const expressValidtor = require('express-validator');
require('dotenv').config();

const URI = process.env.MONGO_URL;
mongoose.connect(URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let db = mongoose.connection;

db.once('open',()=>{
    console.log(`Bro Bro Bro`);
});

db.on('error',()=>{
    console.log(`OOpsie there is an error`);
});

app.use(cors());

app.use(expressSession({
    secret : ' A keyboard cat',
    saveUninitialized:true,
    resave:true,
}));

app.use(expressValidtor());

app.use('/hotels',require('./routes/hotels.routes'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`I am on and the port is ${port}`);
});