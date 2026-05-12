# ============================================
# Dockerfile - CampusConnect Backend
# Universidad Innovatec - Caso Práctico 3
# ============================================

# PASO 1: Imagen base
# Usamos Node.js 20 sobre Alpine Linux (versión liviana, ~50MB)
FROM node:20-alpine

# PASO 2: Información del mantenedor (opcional pero buena práctica)
LABEL maintainer="Equipo CampusConnect <campusconnect@innovatec.edu>"
LABEL description="Backend API REST para plataforma académica CampusConnect"

# PASO 3: Crear directorio de trabajo dentro del contenedor
# Todos los comandos siguientes se ejecutarán desde /app
WORKDIR /app

# PASO 4: Copiar SOLO los archivos de dependencias primero
# Esto aprovecha el cache de Docker: si solo cambias el código (no las deps),
# no se reinstalarán los node_modules cada vez que construyas la imagen.
COPY package*.json ./

# PASO 5: Instalar dependencias de producción
# --omit=dev evita instalar nodemon (que solo se usa en desarrollo)
# bcrypt necesita herramientas de compilación, las instalamos temporalmente
RUN apk add --no-cache --virtual .build-deps python3 make g++ \
    && npm install --omit=dev \
    && apk del .build-deps

# PASO 6: Copiar el resto del código fuente
COPY . .

# PASO 7: Exponer el puerto donde escucha la aplicación
EXPOSE 3000

# PASO 8: Crear un usuario no-root para mayor seguridad
# Es una mala práctica correr aplicaciones como root dentro del contenedor
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs && \
    chown -R nodeuser:nodejs /app
USER nodeuser

# PASO 9: Comando que se ejecutará cuando el contenedor inicie
CMD ["node", "src/app.js"]