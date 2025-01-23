# Build image (para crear la versión optimizada)
FROM node:18 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build  
# Esto genera la carpeta 'dist' o 'build'

# Nginx image (para servir los archivos estáticos)
FROM nginx:alpine

# Copiar los archivos de la carpeta 'build' o 'dist' al contenedor Nginx
COPY --from=build /app/dist /usr/share/nginx/html  
# O '/app/build', dependiendo de tu configuración

# Exponer el puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
