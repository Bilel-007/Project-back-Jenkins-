const mongoose = require("mongoose");
// require('dotenv'.config({path:'./.env'}))
// require('dotenv').config()
// MONGO_URI=process.env.MONGO_URI

const connectDB = () => {
  mongoose.connect("mongodb://mongo:27017", (err) => {
    if (err) throw err;
    else console.log("database is connected");
  });
};
module.exports = connectDB;
