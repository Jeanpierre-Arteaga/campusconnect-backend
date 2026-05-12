const pool = require('../config/database');

const getNotasDelAlumno = async (req, res) => {
    try {
        const estudianteId = req.user.estudiante_id;

        const result = await pool.query(
            `SELECT n.id, n.tipo_evaluacion, n.nota, n.fecha_registro, n.observaciones,
                    c.nombre as curso, c.codigo_curso
             FROM notas n
             INNER JOIN cursos c ON c.id = n.curso_id
             WHERE n.estudiante_id = $1
             ORDER BY n.fecha_registro DESC`,
            [estudianteId]
        );

        res.json({ notas: result.rows });
    } catch (error) {
        console.error('Error al obtener notas:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = { getNotasDelAlumno };