const pool = require('../config/database');

const getCursosDelAlumno = async (req, res) => {
    try {
        const estudianteId = req.user.estudiante_id;

        const result = await pool.query(
            `SELECT c.id, c.codigo_curso, c.nombre, c.descripcion, c.creditos, c.semestre,
                    d.nombres || ' ' || d.apellidos as docente
             FROM cursos c
             INNER JOIN matriculas m ON m.curso_id = c.id
             LEFT JOIN docentes d ON d.id = c.docente_id
             WHERE m.estudiante_id = $1 AND m.estado = 'activo'`,
            [estudianteId]
        );

        res.json({ cursos: result.rows });
    } catch (error) {
        console.error('Error al obtener cursos:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = { getCursosDelAlumno };