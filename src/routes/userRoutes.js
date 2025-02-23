const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');

const router = express.Router();

router.get('/getUsers', getAllUsers);
router.post('/createUser', createUser);

module.exports = router;
