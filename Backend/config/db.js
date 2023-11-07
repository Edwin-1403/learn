const mongoose = require("mongoose");
require("dotenv").config({});

const url = process.env.DATABASE_URL;
const db = mongoose.connection;

const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(url);
    console.log(`mongoDB connected: ${connect.connection.host}`);

    const roomCollection = db.collection("rooms");
    const changeStream = roomCollection.watch();

    changeStream.on("change", (change) => {
      if (change.operationType === "insert") {
        const roomDetails = change.fullDocument;
        pusher.trigger("room", "inserted", roomDetails);
      } else {
        console.log("Not Expected event to trigger");
      }
    });

    const msgCollection = db.collection("messages");
    const changeStream1 = msgCollection.watch();

    changeStream1.on("change", (change) => {
      if (change.operationType === "insert") {
        const messageDetails = change.fullDocument;
        pusher.trigger("messages", "inserted", messageDetails);
      } else {
        console.log("Not Expected event to trigger");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
