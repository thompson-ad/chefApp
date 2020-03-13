# Chef App Server

## Getting the database set up

you will need Docker in order to install a containerised MySQL dev environment. After getting docker, run the following command anywhere:

```sh
docker run \
  -p 0.0.0.0:7999:3306 \
  --name gsd-db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=gsd-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=gsd \
  -d mysql:5.7.20
```

this will create a docker instance called `gsd-db`, running MySQL v5.7.20, with the root password being `password`. It also creates a database called `gsd`, creates a user called `gsd-dev` (with password `password`), and assigns that user full permission onto the `gsd` database.

NOTES:

-p 0.0.0.0 -> means that we are going to run it on the localhost
:7999 -> this is the port on our computer
:3306 -> this is the port in the Docker container
MySQL accesses 3306 by default

-d mysql:5.7.20 -> this is the docker container that we are going to be referencing

SEQUELIZE is our ORM and this is an Object relational mapper which is a way of us accessing our database using javascript so you don't have to write direct SQL code.

We are using Sequelize TS to use typescript

First set up sequelize migrations - ways to update the database to match the latest version of your application.
