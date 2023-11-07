const express = require('express');
const PORT = process.env.PORT || 5000;
const router = require('./api/router');
const connectDB = require('./config/db');
const cors = require("cors");
const Pusher = require("pusher");

const app = express();

const pusher = new Pusher({
    appId: "1700939",
    key: "74eb27fef5792cddd511",
    secret: "2cc3fde33232f8ddb626",
    cluster: "ap2",
    useTLS: true
  });

connectDB();

app.use(cors())
app.use(express.json());
app.use(router)


app.listen(PORT, () => {
    console.log (`Server started Successfully ${PORT}`)
})