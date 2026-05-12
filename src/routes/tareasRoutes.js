const express = require('express');
const router = express.Router();
const { getTareasPendientes } = require('../controllers/tareasController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, getTareasPendientes);

module.exports = router;