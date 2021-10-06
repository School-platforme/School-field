var teacherRoute = require('express').Router();
var teacherController = require("../teacher/teacherController");



teacherRoute.route('/teacher')
.post(teacherController.createTeacher)



module.exports = teacherRoute;