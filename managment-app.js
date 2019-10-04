const express = require('express');
const bodyparse = require('body-parser');
var admin = require("firebase-admin");
var users = require('./users.js')
var userTasks = require('./userTasks.js')
const app = express();

app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

module.exports = {users, userTasks}

//Firebase realtime database configuration
// Fetch the service account key JSON file contents
var serviceAccount = require("./user-managment-55d82-firebase-adminsdk-w16vr-a037b389fb");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://user-managment-55d82.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();

app.get('/', (req, res) => {
    res.send('User Managment API entry point');
})

users(app,db);
userTasks(app,db);

app.listen(3030, () => {
    console.log('Up and running! -- user managment application')
})