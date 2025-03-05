const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./database/db");
const User = require("./models/user");
const user = require("./routes/user")


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


connectDB();



app.use("/api", user);


app.get("/users", async (req, res) => {
    const result = await User.find();
    res.send(result)
})

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

// Default error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Error details in console
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
