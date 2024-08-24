const express = require('express');
const router = express.Router();
const { registerUser, loginUser, registerFaculty, registerParent, registerAdmin } = require('../controller/usercontroller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/studentregister', registerUser);
router.post('/parentregister', registerParent);
router.post('/adminregister', registerAdmin);
router.post('/facultyregister', registerFaculty);
router.post('/login', loginUser);

// Example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'You have access to this protected route', user: req.user });
});

module.exports = router;
