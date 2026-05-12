# CampusConnect Backend 🎓

Backend de la plataforma académica **CampusConnect** desarrollada como parte del **Caso Práctico 3 - Desarrollo de Sistemas Web** de la Universidad Innovatec.

## 📌 Descripción

Sistema backend que expone APIs REST para gestionar autenticación de estudiantes, cursos, tareas, calificaciones y materiales académicos.

## 🛠️ Tecnologías

- **Node.js 20** + **Express 4**
- **PostgreSQL 17** (base de datos relacional)
- **JWT** para autenticación
- **bcrypt** para hash de contraseñas
- **Docker** para contenedorización

## 🚀 Endpoints disponibles

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/login` | Inicio de sesión | ❌ |
| GET | `/api/cursos` | Cursos del estudiante | ✅ JWT |
| GET | `/api/tareas` | Tareas pendientes | ✅ JWT |
| GET | `/api/notas` | Calificaciones | ✅ JWT |
| GET | `/api/materiales` | Materiales de cursos | ✅ JWT |
| GET | `/health` | Health check | ❌ |

## ⚙️ Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/campusconnect-backend.git
cd campusconnect-backend

# Instalar dependencias
npm install

# Crear archivo .env (ver .env.example)
# Crear base de datos PostgreSQL
psql -U postgres -c "CREATE DATABASE campusconnect;"
psql -U postgres -d campusconnect -f database/schema.sql
psql -U postgres -d campusconnect -f database/seed.sql

# Iniciar servidor en modo desarrollo
npm run dev
```

## 👥 Equipo

- Adriano Medrano
- Jeanpierre Arteaga
- Jairo Falcon
- Dayana Santos
- Luis Aceituno
- Luis Gonzales
- Manuel Ocaña

## 📄 Licencia

Proyecto académico - Universidad Innovatec 2026
