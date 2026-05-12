const express = require('express');
const router = express.Router();
const { getCursosDelAlumno } = require('../controllers/cursosController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, getCursosDelAlumno);

module.exports = router;