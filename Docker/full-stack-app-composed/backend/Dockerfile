FROM node:alpine 

WORKDIR /app 

COPY  package*.json . 

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN npm install 

COPY --chown=appuser:appuser . . 

EXPOSE 3001

USER appuser

CMD ["npm", "start"]