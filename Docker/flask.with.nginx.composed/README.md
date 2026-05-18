## composed flask-app with nginx as a reverse proxy

## build 
```bash
docker compose up --build 

```
## browse the app
```bash 
# access the appp through nginx 
http://localhost:8080   

# access the api 
http://localhost:8080/api/status

```
## compose down 
```bash 
docker compose down 
```