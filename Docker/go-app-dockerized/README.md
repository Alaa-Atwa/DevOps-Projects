## Overview 

- a simple go lang app with docker.
- the docker image of this app is optimized to be less than 10 MB.
- using alpine and scratch to minimize the image size.

* scratch is nothing !.

## build 
```bash 
docker build -t go-app . 

```

## run a container 
```bash 

docker run -d -p 8080:8080 --name go-container go-app 

```
