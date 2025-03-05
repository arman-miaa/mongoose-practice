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

module.exports = createUser;