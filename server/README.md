# Grid Server
Backend:
  - PostgreSQL/Sequelize ORM
  - Node.js
  - Express
  - Nodemon

### Installation
Install the dependencies and start the server:
Create the DB 'workouts' before starting the server.

```sh
$ npm install
$ npm start
```

For data migration run the following after starting and stopping the server:

```sh
$ npm run seeds:load
```
Note: if flag 'eraseDatabaseOnSync' in the ~/src/app.js is set to true, then all Records
will be flushed on any server restart.
Once the app is started for the first time, the sync method in ~/src/app.js will migrate the tables.
