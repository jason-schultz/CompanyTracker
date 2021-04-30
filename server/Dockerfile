FROM node:15.14.0-alpine
RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

COPY ./package.json ./usr/app/server
RUN npm install -quiet

COPY . .

EXPOSE 3001
CMD ["npm", "run", "start"]