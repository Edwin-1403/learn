const express = require('express');
const PORT = process.env.PORT || 5000;
const router = require('./api/router');
const connectDB = require('./config/db');
const cors = require("cors")

const app = express();
connectDB();

app.use(cors())
app.use(express.json());
app.use(router)


app.listen(PORT, () => {
    console.log (`Server started Successfully ${PORT}`)
})