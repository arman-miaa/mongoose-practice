const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await User.create(newUser);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUsers = async (req, res) => {
    try {
        const result = await User.find();
        res.status(200).json({success: true, message: 'get data successfully',result})
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}





module.exports = { createUser, getUsers};