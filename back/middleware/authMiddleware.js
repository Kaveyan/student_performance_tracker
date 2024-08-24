const jwt = require('jsonwebtoken');
const { User, Faculty, Admin, Parent } = require('../model/userModel'); // Import all models

const authMiddleware = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Extract the token from the Authorization header
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Determine the user type based on the role and find the user
            let user;
            if (decoded.role === 'student') {
                user = await User.findById(decoded.id).select('-password');
            } else if (decoded.role === 'faculty') {
                user = await Faculty.findById(decoded.id).select('-password');
            } else if (decoded.role === 'admin') {
                user = await Admin.findById(decoded.id).select('-password');
            } else if (decoded.role === 'parent') {
                user = await Parent.findById(decoded.id).select('-password');
            } else {
                return res.status(401).json({ message: 'Invalid user role' });
            }

            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }

            // Attach user to request object
            req.user = user;
            req.userId = decoded.id; // Set req.userId for route handlers

            next();

        } catch (error) {
            console.error(error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = authMiddleware;
