const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);


// landing Page
app.get('/',(req, res) => {
    res.send("Hello form node API in dev");
});


mongoose.connect("mongodb+srv://<username>:<password>@backenddb.oorwo.mongodb.net/CRUD_API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, ()=> {
        console.log('server is running on port 3000');
    });
}).catch(() => {
    console.log("Connection failed!");
});
