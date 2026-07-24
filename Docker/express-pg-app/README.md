## overview 

- express app with postgresSQL database to add/list/delete notes 

## structure 
express-pg-app/
├── docker-compose.yml  
├── Dockerfile          
├── .dockerignore
├── package.json
├── init.sql            # initial data for the db 
└── src/
    └── index.js         

## build 
```bash 

docker compose up --build 

```
## test 
```bash 
# List notes (added for the first time from init.sql)
curl http://localhost:3000/notes

# Create a note
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"text": "My first note"}'

# Delete note #1
curl -X DELETE http://localhost:3000/notes/1
```

## destroy 
```bash 

docker compose down 

```