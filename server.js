const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const connectionDB = require("./src/config/db");
const orderRouter = require('./src/routes/orderRoutes');

const port = process.env.PORT || 3000 ;
const app = express();
app.use(express.json());
connectionDB();

app.use(bodyParser.json());

app.use('/order',orderRouter);
app.get("/", (req,res) => {
    res.json({
        status : "success",
        message : "this is a base url."
    })
})


app.listen(port, () => {
    console.log(`Start your server for http://localhost:${port}`);
    
})