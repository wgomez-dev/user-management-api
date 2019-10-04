const express = require('express');
const bodyparse = require('body-parser');
var admin = require("firebase-admin");

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
    res.send('Main endpoint');
})

app.post('/guardar',(req, res) => {
    console.log(req.body);
    db.ref("users").push(req.body);
    res.send("Recibido");
});

app.listen(3000, () => {
    console.log('Up and running! -- user managment application')
})