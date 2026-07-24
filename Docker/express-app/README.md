# Express App with Docker

## Overview

This project is a simple Node.js application built using Express and containerized using Docker.

The app runs a basic web server (on port 4000) and demonstrates how to:

---

## Build Docker Image

```bash
docker build -t express-app .
# -t == tag , give a name to the image
```

---

## ️Run the Container

```bash
docker run -d -p 4000:4000 --name express-container express-app
# run in detached mode (-d) and expose local port 4000 to the app port 4000
```

---

## Access the Application

Open your browser and go to:

```bash
http://localhost:4000
# or simply inside the terminal $> curl http://localhost:4000
```

You should see the app running.

---

## Stop or remove the Container

```bash
docker stop express-container
docker rm express-container 
```
