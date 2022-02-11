FROM node:17.4.0
Label maintainer="Preston Evans"
Label description="First docker app"
Label cohort="13"
Label animal+"Cheetah"
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install
CMD ["node", "app.js"]