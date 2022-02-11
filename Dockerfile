FROM node:17.4.0
Label maintainer="Preston Evans <pevans@nowhere.com>"
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "app.js"]