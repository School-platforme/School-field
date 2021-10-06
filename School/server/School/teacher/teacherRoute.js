var teacherRoute = require('express').Router();
var teacherController = require("../teacher/teacherController");
//


teacherRoute.route('/teacher')
    .post(teacherController.createTeacher)
teacherRoute.route('/teacher/:id')
    .get(teacherController.getAllStudent)


module.exports = teacherRoute;