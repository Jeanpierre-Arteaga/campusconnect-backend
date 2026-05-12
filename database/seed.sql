-- ============================================

-- Usuarios (password = "123456" hasheado con bcrypt)
INSERT INTO usuarios (email, password_hash, rol) VALUES
('juan.perez@innovatec.edu', '$2b$10$rZ8KvN0pQwX1YzL2mNqHueP6F8wT3uJ9kV5sM7bC4dE6fG8hI0jK2', 'estudiante'),
('maria.lopez@innovatec.edu', '$2b$10$rZ8KvN0pQwX1YzL2mNqHueP6F8wT3uJ9kV5sM7bC4dE6fG8hI0jK2', 'estudiante'),
('carlos.docente@innovatec.edu', '$2b$10$rZ8KvN0pQwX1YzL2mNqHueP6F8wT3uJ9kV5sM7bC4dE6fG8hI0jK2', 'docente');

-- Estudiantes
INSERT INTO estudiantes (usuario_id, codigo_estudiante, nombres, apellidos, carrera, ciclo) VALUES
(1, 'U2024001', 'Juan', 'Pérez García', 'Ingeniería de Sistemas', 5),
(2, 'U2024002', 'María', 'López Torres', 'Ingeniería de Sistemas', 5);

-- Docentes
INSERT INTO docentes (usuario_id, codigo_docente, nombres, apellidos, especialidad) VALUES
(3, 'D2024001', 'Carlos', 'Mendoza Ríos', 'Desarrollo Web');

-- Cursos
INSERT INTO cursos (codigo_curso, nombre, descripcion, creditos, docente_id, semestre) VALUES
('DSW-501', 'Desarrollo de Sistemas Web', 'Curso de backend, frontend y despliegue cloud', 4, 1, '2026-I'),
('BD-301', 'Bases de Datos', 'Diseño y administración de BD relacionales', 3, 1, '2026-I'),
('PROG-201', 'Programación Avanzada', 'POO y patrones de diseño', 4, 1, '2026-I');

-- Matrículas
INSERT INTO matriculas (estudiante_id, curso_id) VALUES
(1, 1), (1, 2), (1, 3),
(2, 1), (2, 2);

-- Tareas
INSERT INTO tareas (curso_id, titulo, descripcion, fecha_entrega, puntaje_maximo) VALUES
(1, 'Caso Práctico 3', 'Diseño y despliegue de plataforma web académica', '2026-05-25 23:59:00', 20.00),
(1, 'Dockerfile del backend', 'Crear Dockerfile y docker-compose', '2026-05-20 23:59:00', 20.00),
(2, 'Modelado entidad-relación', 'Diseñar BD para sistema de biblioteca', '2026-05-18 23:59:00', 20.00);

-- Notas
INSERT INTO notas (estudiante_id, curso_id, tipo_evaluacion, nota, observaciones) VALUES
(1, 1, 'Examen Parcial', 17.50, 'Buen desempeño'),
(1, 2, 'Práctica Calificada 1', 18.00, 'Excelente trabajo'),
(2, 1, 'Examen Parcial', 16.00, 'Aceptable');

-- Materiales
INSERT INTO materiales (curso_id, titulo, nombre_archivo, url_archivo, tipo_archivo, tamanio_kb) VALUES
(1, 'Guía de Docker', 'guia-docker.pdf', '/uploads/guia-docker.pdf', 'pdf', 2500),
(1, 'Slides Semana 1', 'semana1.pptx', '/uploads/semana1.pptx', 'pptx', 4800),
(2, 'Manual PostgreSQL', 'postgres-manual.pdf', '/uploads/postgres-manual.pdf', 'pdf', 3200);

-- Notificaciones
INSERT INTO notificaciones (usuario_id, titulo, mensaje, tipo) VALUES
(1, 'Nueva tarea asignada', 'Se asignó la tarea "Caso Práctico 3" en el curso DSW-501', 'tarea'),
(1, 'Nota publicada', 'Se publicó tu nota del Examen Parcial en DSW-501', 'nota'),
(2, 'Nueva tarea asignada', 'Se asignó la tarea "Caso Práctico 3" en el curso DSW-501', 'tarea');