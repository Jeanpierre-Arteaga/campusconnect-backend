const pool = require('../config/database');

const getTareasPendientes = async (req, res) => {
    try {
        const estudianteId = req.user.estudiante_id;

        const result = await pool.query(
            `SELECT t.id, t.titulo, t.descripcion, t.fecha_entrega, t.puntaje_maximo, t.estado,
                    c.nombre as curso, c.codigo_curso
             FROM tareas t
             INNER JOIN matriculas m ON m.curso_id = t.curso_id
             INNER JOIN cursos c ON c.id = t.curso_id
             WHERE m.estudiante_id = $1 AND t.estado = 'pendiente'
             ORDER BY t.fecha_entrega ASC`,
            [estudianteId]
        );

        res.json({ tareas: result.rows });
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = { getTareasPendientes };