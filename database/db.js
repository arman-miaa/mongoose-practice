


const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log('mongodb connected successfully');
    } catch (error) {
        console.error("mongodb connection failed");
        process.exit(1)
    }
}

module.exports = connectDB;
