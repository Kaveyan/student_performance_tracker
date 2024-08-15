const express = require('express');
const router = express.Router();
const { registerUser, loginUser, registerFaculty, registerParent, registerAdmin } = require('../controller/usercontroller');

router.post('/studentregister', registerUser);
router.post('/parentregister', registerParent);
router.post('/adminregister', registerAdmin);
router.post('/facultyregister', registerFaculty);
router.post('/login', loginUser);

module.exports = router;
