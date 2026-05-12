const express = require('express');
const router = express.Router();
const { getNotasDelAlumno } = require('../controllers/notasController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, getNotasDelAlumno);

module.exports = router;