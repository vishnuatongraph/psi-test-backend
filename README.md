# This is the psi_test_backend

This project is the backend of psi assignment which is created using nodejs, postgres database and sequelize Orm.
This project gets the data of user and after that let that user create, update and delete the tasks.

## Installation Requirements

Firstly setup the postgresql database in the local environment and edit the credentials in models/index.js file. 
The schema will be automatically created when you start the server.


## Available Scripts

In the project directory, you can run:

### `npm install`


Install the required dependencies

### `npm start`

Runs the app in the development mode.\
the server starts at [http://localhost:8080].

## About the project

In this node application we used sequelize ORM to connect with postgres database.
We created the schema is models folder. The schema will be auto generated when you run npm start.
We have User controller to insert the data of user in user table.
We have task controller to create, update, delete and get the tasks.


## libraries used in the Project

1. pg for Postgresql database
2. pg-hstore for connecting with Sequelize ORM
3. sequelize for ORM
4. swagger-ui-express for api-documentation

## Api documentation

For api documentation we used swagger-ui-express that is available on [http://localhost:8080/api-docs]