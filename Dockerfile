FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY app.js ./
RUN npm ci
EXPOSE 5000
CMD ["node", "app.js"]
