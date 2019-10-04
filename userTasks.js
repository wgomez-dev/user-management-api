module.exports = function (app, db) {
    app.get('/userTasks', (req, res) => {
        db.ref("userTasks/").once('value', function(snapshot){
            res.send(snapshot.val());
        })
    })
    
    app.get('/userTasks/:id', (req, res) => {
        db.ref("userTasks/"+req.params.id).once('value', function(snapshot){
            res.send(snapshot.val());
        })
    })
    
    app.post('/userTasks',(req, res) => {
        db.ref("userTasks/"+req.body.id).set(req.body);
        res.send("Saved");
    });
    
    app.delete('/userTasks/:id', (req, res) => {
        db.ref("userTasks/"+req.params.id).remove().then(function() {
            res.send("Remove succeeded.")
          })
          .catch(function(error) {
            res.send("Remove failed: " + error.message)
          });
    })
    
    app.put('/userTasks/:id', (req, res) => {
        db.ref("userTasks/"+req.params.id).set(req.body);
        res.send("Updated");
    })
}