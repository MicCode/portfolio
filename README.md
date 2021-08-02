# Portfolio

## Libraries
ThreeJS: [https://threejs.org/]()
## Docker
Build image
```
docker build -t portfolio .
```

Launch server
```
docker run --name portfolio -d -p 80:80 portfolio
```

Open page [http://localhost]()

Quick update running container:
```
docker stop portfolio; docker rm portfolio; docker build -t portfolio . && docker run --name portfolio -d -p 80:80 portfolio
```