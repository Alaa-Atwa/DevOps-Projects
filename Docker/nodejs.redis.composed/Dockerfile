FROM node:alpine 

WORKDIR /app 

COPY package.json .

RUN npm install 

COPY . . 

CMD ["npm", "start"]
# start is a script defined inside package.json