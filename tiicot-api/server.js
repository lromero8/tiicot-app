var express = require("express");
var app = express();
var bodyParser = require('body-parser');
// var session = require('express-session');
var mongoose = require("mongoose");
var cors = require('cors')
 

var Student = require('./Schemas/Student');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


/* ------------------- MONGOOSE CONNECTION WITH MONGODB -------------------- */

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://root:rootpassword@localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });


// Routes
// post student /student
// get student /student
// get student by firstname or lastname /student/:firstOrLast

/* ------------------- POST STUDENT -------------------- */


app.post("/student", (req, res) => {

    var myData = new Student(req.body);
    myData.save()
        .then(item => {
            res.send("Student saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

})

/* ------------------- GET STUDENT -------------------- */

app.get("/student", async (request, response) => {

    try {
        var result = await Student.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }

});

/* ------------------- FIND STUDENT BY FIRST OR LAST NAME -------------------- */

app.get("/find/:firstOrLast", async (request, response) => {
    try {
        var result = await Student.find({$or:[{firstName: request.params.firstOrLast},{lastName: request.params.firstOrLast}]}).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});




app.listen(3001)