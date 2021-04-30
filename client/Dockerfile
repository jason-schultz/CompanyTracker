FROM node:15.14.0-alpine
RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

COPY ./package.json ./usr/app/client
RUN npm install -quiet

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]