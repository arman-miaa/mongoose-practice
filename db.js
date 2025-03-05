const express = require("express");

// Express app initialization
const app = express();
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

// Default Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
 