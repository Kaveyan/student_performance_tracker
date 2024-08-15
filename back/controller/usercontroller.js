const { User, Faculty, Admin, Parent } = require('../model/userModel');

const registerUser = async (req, res) => {
  const { firstName, department , roleNumber, batch, email, password } = req.body;

  try {
    const user = await User.create({
      firstName,
      department,
      roleNumber,
      batch,
      email,
      password
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  // Implement login logic
};

const registerFaculty = async (req, res) => {
  const { firstName, lastName, department, roleNumber, domain, email, password } = req.body;

  try {
    const user = await Faculty.create({
      firstName,
      department,
      roleNumber,
      domain,
      email,
      password
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const registerAdmin = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await Admin.create({
      firstName,
      lastName,
      email,
      password
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const registerParent = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await Parent.create({
      firstName,
      lastName,
      email,
      password
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, registerFaculty, registerAdmin, registerParent };

