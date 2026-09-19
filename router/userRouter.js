const express = require('express');
const User = require('../model/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        console.log('User added successfully');

        res.status(201).json({
            message: 'User added successfully',
            user: savedUser
        });
    } catch (error) {
        console.log('Error adding user:', error.message);

        res.status(500).json({
            message: 'Error adding user',
            error: error.message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        console.log('Error retrieving users:', error.message);

        res.status(500).json({
            message: 'Error retrieving users',
            error: error.message
        });
    }
});

module.exports = router;