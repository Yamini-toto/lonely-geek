const express = require('express');
const ejs = require('ejs');
const app = express();
app.set('view engines', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.get("/projects", function(req, res){
      res.render("project");
});
app.listen(3000,function(req, res){
    console.log("We are running on port 3000");
})