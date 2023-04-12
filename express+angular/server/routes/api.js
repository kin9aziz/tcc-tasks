const express = require('express');
const router = express.Router();
const authCheck = require('../middleware/auth-check');
const Roles = require('../middleware/roles');

const messageController = require('../api/controllers/messageController');
const userController = require('../api/controllers/userController');

// GET /api/messages/public1
router.get('/messages/public1', messageController.getPublicMessage);

// GET /api/messages/private1
router.get('/messages/private1', authCheck(), messageController.getPrivateMessage);

// GET /api/messages/admin1
router.get('/messages/admin1', authCheck([Roles.admin,Roles.superAdmin]), messageController.getAdminMessage);


// GET /api/users
router.get('/users', authCheck([Roles.superAdmin]), userController.list);

// GET /api/users/:id
router.get('/users/:id', authCheck([Roles.superAdmin]), userController.find);

// DELETE /api/users/:id
router.delete('/users/:id', authCheck([Roles.superAdmin]), userController.destroy);

// PUT /api/users
router.put('/users', authCheck([Roles.superAdmin]), userController.updateUser);

// PUT /api/users/password
router.put('/users/password', authCheck([Roles.superAdmin]), userController.updatePassword);

// PUT /api/users/profile
router.put('/users/profile', authCheck(), userController.updateProfile);

// PUT /api/users/profile/password
router.put('/users/profile/password', authCheck(), userController.updateProfilePassword);

module.exports = router;
