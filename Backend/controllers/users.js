const User = require("../models/User");

// @Description - Add user to scoreboard
// @Route - POST  /api/users
// @access - Private

const addUser = async (req, res, next) => {
  const { name, score, time } = req.body;

  try {
    const user = new User({ name, score, time });

    await user.save();

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.error(err);
  }

  next();
};

// @Description - Get users scoreboard
// @Route - GET  /api/users
// @access - Public

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: [],
    });
  }
};

module.exports = { addUser, getUsers };
