const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a First Name']
  },
  department: {
    type: String,
    required: [true, 'Please add a Department']
  },
  roleNumber: {
    type: String,
    required: [true, 'Please add a Roll Number']
  },
  batch: {
    type: Number,
    required: [true, 'Please add a Batch']
  },
  email: {
    type: String,
    required: [true, 'Please add an Email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a Password']
  }
}, { timestamps: true });

const facultySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a First Name']
  },
  department: {
    type: String,
    required: [true, 'Please add a Department']
  },
  roleNumber: {
    type: String,
    required: [true, 'Please add a Faculty ID Number']
  },
  domain: {
    type: String,
    required: true,
    enum: ['language', 'project', 'achievement', 'communication language', 'certificate'],
  },
  email: {
    type: String,
    required: [true, 'Please add an Email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a Password']
  }
}, { timestamps: true });

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a First Name']
  },
  email: {
    type: String,
    required: [true, 'Please add an Email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a Password']
  }
}, { timestamps: true });

// Define the schema for Parent
const parentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a First Name']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a Last Name']
  },
  email: {
    type: String,
    required: [true, 'Please add an Email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a Password']
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Faculty = mongoose.model('Faculty', facultySchema);
const Admin = mongoose.model('Admin', adminSchema);
const Parent = mongoose.model('Parent', parentSchema);

module.exports = { User, Faculty, Admin, Parent };

