var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var teacher = require("./School/teacher/teacherRoute")
var student = require("./School/student/studentRouter")
var admin = require("./School/Admin/AdminRouter")
var checkPoint = require("./School/checkPoint/checkpoinRouter")
var result = require("./School/Result/ResultRouter")
var contactUs = require("./School/ContactUs/ContactUsRouter")
var lecture = require("./School/Lecture/LectureRoute")
var exercice = require("./School/Exercice/ExerciceRouter")
var app = express();
var cors = require("cors")
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.use("/", teacher)
app.use("/", student)
app.use("/", admin)
app.use("/", lecture)
app.use("/", exercice)
app.use("/", checkPoint)
app.use("/", result)
app.use("/", contactUs)

var PORT = 3002;

app.listen(PORT, function () {
  console.log('School-MongoDB RESTful API listening on http://localhost:' + PORT);
});
