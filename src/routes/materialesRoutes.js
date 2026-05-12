const express = require('express');
const router = express.Router();
const { getMateriales } = require('../controllers/materialesController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, getMateriales);

module.exports = router;