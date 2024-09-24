const mongoose = require("mongoose");

const connectionToDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blogDatabase")
    .then(() => console.log("DB connected"))
    .catch(() => console.log("Error connecting to DB"));
};

module.exports = connectionToDatabase;
