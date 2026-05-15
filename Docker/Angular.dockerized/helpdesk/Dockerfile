# build stage 
FROM node:20-alpine AS build 

RUN mkdir -p /app  
# create /app dir if not found 

WORKDIR /app 
COPY package.json /app/ 
RUN npm install 

COPY . /app/ 
RUN npm run build --prod 

# run stage 
# angular apps need to be served after build (using nginx here.)
FROM nginx:alpine 

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/helpdesk/browser /usr/share/nginx/html 

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
