require("dotenv").config()
const express = require("express")
const app = express()
require("./db/Connection")
const cookieParser = require("cookie-parser");

const Products = require("./models/ProductsSchema");

const DefaultData = require("./DefaultData");

const router = require("./routes/router");

const cors = require("cors")

app.use(express.json());
app.use(cookieParser(""))
app.use(cors())
app.use(router)





const port = 8005;

app.listen(port, ()=> {
    console.log(`server is running on port number, ${port}`);
});

DefaultData()