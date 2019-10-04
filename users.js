const express = require('express');
const bodyparse = require('body-parser');
var admin = require("firebase-admin");

var user = require('./models/user');

const app = express();

app.use(bodyparse.urlencoded({ extended: false }));
app.use(bodyparse.json());

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

app.get('/users', (req, res) => {
    db.ref("users/").once('value', function(snapshot){
        res.send(snapshot.val());
    })
})

app.get('/users/:id', (req, res) => {
    db.ref("users/"+req.params.id).once('value', function(snapshot){
        res.send(snapshot.val());
    })
})

app.post('/users',(req, res) => {
    console.log(req.body);
    db.ref("users/"+req.body.id).set(req.body);
    res.send("Saved");
});

app.delete('/users/:id', (req, res) => {
    db.ref("users/"+req.params.id).remove().then(function() {
        res.send("Remove succeeded.")
      })
      .catch(function(error) {
        res.send("Remove failed: " + error.message)
      });
})

app.put('/users/:id', (req, res) => {
    db.ref("users/"+req.params.id).set(req.body);
    res.send("Updated");
})

app.listen(3000, () => {
    console.log('Up and running! -- user managment application')
})