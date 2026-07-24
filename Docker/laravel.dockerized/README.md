## overview 
- laravel is PHP web framework.
- **sail** make it easy to run your laravel project using Docker, (no need to install dependencies)

## install laravel example 
```bash 
curl -s "https://laravel.build/example-app" | bash 
# by default a set of preconfigured services come with it, like mysql, redis ...etc.
# after installation you will find a compose file of all installed services with sail.

```

## test the app 
```bash
cd ./example-app

./vendor/bin/sail up 

```
## shut the compose down
``` 
docker compose down 
```