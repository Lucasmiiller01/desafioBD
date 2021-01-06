FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 8005 
CMD [ "npm", "start" ]
