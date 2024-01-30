# Multicontainer application

Dockerize a React application with Node.js Postgres and Nginx - dev and prod

This project contains a React client, Node.js backend, PostgreSQL database and Nginx web server.

You can spin up the project in development mode: 
```
docker-compose up --build
```

Once all of the resources are up, you can access the client in the browser by visiting http://localhost:3050/.

Take note of the port (:3050), as you are hitting the port associated with nginx which is handling the proxy for the client/ and api/.

It contains Dockerfiles for client, server which you should push to your docker hub to be able
to pull them down when in next tutorial we will use them in Kubernetes.
