const pool = require('../config/database');

const getMateriales = async (req, res) => {
    try {
        const estudianteId = req.user.estudiante_id;

        const result = await pool.query(
            `SELECT mat.id, mat.titulo, mat.descripcion, mat.nombre_archivo, 
                    mat.url_archivo, mat.tipo_archivo, mat.tamanio_kb, mat.fecha_subida,
                    c.nombre as curso, c.codigo_curso
             FROM materiales mat
             INNER JOIN cursos c ON c.id = mat.curso_id
             INNER JOIN matriculas m ON m.curso_id = c.id
             WHERE m.estudiante_id = $1
             ORDER BY mat.fecha_subida DESC`,
            [estudianteId]
        );

        res.json({ materiales: result.rows });
    } catch (error) {
        console.error('Error al obtener materiales:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = { getMateriales };