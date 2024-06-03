FROM node:18-alpine
WORKDIR /app
COPY . .
ENV PORT 5000
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "start-dev"]