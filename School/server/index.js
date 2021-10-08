var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var teacher = require("./School/teacher/teacherRoute")
var student = require("./School/student/studentRouter")
var admin = require("./School/Admin/AdminRouter")
var cours = require("./School/Course/CourseRouter")
var result = require("./School/Result/ResultRouter")
var contactUs = require("./School/ContactUs/ContactUsRouter")
var app = express();
const cors = require("cors")
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

//

app.use("/", teacher)
app.use("/", student)
app.use("/", admin)
app.use("/", cours)
app.use("/", result)
app.use("/",contactUs)

//
app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the School RESTful API!' });
});

var PORT = 3002;

app.listen(PORT, function () {
  console.log('School-MongoDB RESTful API listening on http://localhost:' + PORT);
});
