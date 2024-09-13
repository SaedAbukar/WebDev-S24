const User = require("../models/User");

// GET /users
const getAllUsers = async (req, res) => {
  const user = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(user);
};
// Similarly, implement createUser, getUserById, deleteUser

// POST /users
const createUser = async (req, res) => {
  const newUser = await User.create({ ...req.body });
  res.status(201).json(newUser);
};
// GET /users/:userId

const getUserById = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /users/:userId

const updateUser = async (req, res) => {
  const { userId } = req.params;

  const upDatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { ...req.body },
    { new: true, overwrite: true }
  );
  if (upDatedUser) {
    res.status(200).json(upDatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /blogs/:blogId
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  const deletedUser = await User.findOneAndDelete({ _id: userId });
  if (deletedUser) {
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
