const express = require("express");
const app = express();
const Book = require("./models/Book");
const books = require("./routes/books");
// const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.json());

//routes
app.use("/api/v1/books", books);
// app.use(errorHandlerMiddleware);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
