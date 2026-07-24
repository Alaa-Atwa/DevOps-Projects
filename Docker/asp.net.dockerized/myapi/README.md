## ASP.NET app dockerized 
- ASP.NET Core is a backend web framework by microsoft.

## building the image 
```bash
docker build -t myapi .

```
## run the container 
```bash 
docker run -d -p 8080:8080 myapi 
# asp.net 8 uses port 8080 by default.
```
## access via web browser
```bash 
# open in browser 
http://localhost:8080

# navigate to users 
http://localhost:8080/users

```