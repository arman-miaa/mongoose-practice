const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));




// // Define Mongoose Schema & Model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const User = mongoose.model("User", userSchema);

// // POST API: নতুন ডাটা যোগ করা
// app.post("/users", async (req, res) => {
//   try {
//     const data = req.body; // ক্লায়েন্ট থেকে আসা ডাটা
//     const result = await User.create(data); // Mongoose দিয়ে MongoDB-তে সংরক্ষণ
//     res.status(201).json({ success: true, data: result });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });


const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, require: true },
    age: Number,
})

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    try {
        const newUser = req.body;
        const result = await User.create(newUser);
        res.status(201).json({success: true, data: result})
    } catch (error) {
        res.status(400).json({success: false, message:error.message})
    }
})



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
