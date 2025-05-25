# Étape 1 : Build de l'application Angular
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build --prod

# Étape 2 : Serveur NGINX pour servir l'app
FROM nginx:alpine

COPY --from=build /app/dist/invoice-planner /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
