FROM python:3.11-slim-bullseye 

# show python logs:
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get -y install gcc libpq 

WORKDIR /app 

COPY requirements.txt . 

RUN pip install -r requirements.txt 

COPY . . 

# we use "command" in compose.yml file instead of "CMD" here.
