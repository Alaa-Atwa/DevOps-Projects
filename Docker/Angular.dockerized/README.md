## Installation 
```bash
sudo apt install nodejs  
node -v 

sudo apt install npm 
npm -v 

sudo npm install -g @angular/cli 
# -g installs angular globally

ng 

```

# creating a new app with angular
```bash 
ng new helpdesk   # create helpdesk app
```

# testing the app
```bash 
cd helpdesk 

ng serve 

# follow the link given to open it in browser 

```

## building the image 
```bash 

docker build -t helpdesk-app . 

```

## run the container 
```bash 
docker run -d -p 8080:80 --name helpdesk helpdesk-app 

```