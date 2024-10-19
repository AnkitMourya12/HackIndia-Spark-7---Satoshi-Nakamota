FROM node:latest
COPY package*.json ./
COPY . .
RUN npm instal
EXPOSE 3000
CMD ["npm", "run", "dev"]