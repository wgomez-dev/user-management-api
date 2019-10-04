module.exports = function (app, db) {
    app.get('/users', (req, res) => {
        db.ref("users/").once('value', function(snapshot){
            
            res.send(snapshotToArray(snapshot));
        })
    })
    
    app.get('/users/:id', (req, res) => {
        db.ref("users/"+req.params.id).once('value', function(snapshot){
            res.send(snapshot.val());
        })
    })
    
    app.post('/users',(req, res) => {
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
}

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};