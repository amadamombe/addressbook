# docker-nodejs
dockerising a node js application

## pm2 
PM2 is a Production Process Manager for Node.js applications
with a built-in Load Balancer.

Link to pm2 docs here -> https://pm2.keymetrics.io/

Link to cheatsheet here ->  https://devhints.io/pm2

## Run App

Start app using pm2

    npm run app

Stop app using pm2

    npm run stop-app

Start app using Node (conditional)

    npm run start


## Running App with a Postgres Docker db instance

1 - Start app using pm2

    npm run app

2 - Run the pre-packaged PostgreSQL database application using:

    $ docker run -it -e "POSTGRES_HOST_AUTH_METHOD=trust" -p 5432:5432 postgres
Docker will download a PostgreSQL image and start it on your machine with the 5432 port mapped to your local network.

3 - Now, with the database running, open a new terminal and execute the migrations to create the table:

    $ npm run migrate
The application should be fully working now:

$ npm run pm2

4 - Try the http://localhost:3000/persons/all route, the endpoint should be accessible

5 - Run the tests using the below command 

    npm run test

All tests should be passing

