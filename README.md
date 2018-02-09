# docker-hello

This repo creates a simple Hello World Docker image.

Login to Docker Hub

```
docker login
```

Build Docker image

```
docker image build -t yogendra0sharma/helloworld:1.0.0 .
```

Push Docker image

```
docker image push arungupta/helloworld:1.0.0
```

Run Docker container

```
docker image push yogendra0sharma/helloworld:1.0.0
```

Invoke application.

Open Browser and test app

if you are using docker-machine then get IP of the running machine
```
docker-machine ip
```

```
http://<machine-Ip>:8080
```
