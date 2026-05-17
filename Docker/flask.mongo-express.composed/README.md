# overview 

## mongodb 
- it is a NOSQL database, it stores data as a document(json-like):
```json
{
  "name": "alaa",
  "role": "devops engineer"
}
```

## mongo-express 
- it is web-based UI for MongoDB.
so, mongodb stores your data and mongo-express lets you see & manage it easily.


## build compose 
```bash 
docker compose up --build 
# --build makes sure that rebuild images before running compose (we use build: ./app in compose file)

```

## access app
```bash 
 http://localhost:5000

```
## access mongo
```bash 
 http://localhost:8081
```