const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const cursosRoutes = require('./routes/cursosRoutes');
const tareasRoutes = require('./routes/tareasRoutes');
const notasRoutes = require('./routes/notasRoutes');
const materialesRoutes = require('./routes/materialesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ruta de salud (health check)
app.get('/health', (req, res) => {
    res.json({ status: 'OK', service: 'CampusConnect Backend', timestamp: new Date() });
});

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/tareas', tareasRoutes);
app.use('/api/notas', notasRoutes);
app.use('/api/materiales', materialesRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo global de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor CampusConnect corriendo en http://localhost:${PORT}`);
});

module.exports = app;