var teacherRoute = require('express').Router();
var teacherController = require("../teacher/teacherController");
//


teacherRoute.route('/teacher')
    .post(teacherController.createTeacher)
    .get(teacherController.getAllTeachersAndStudent)
    
    
    teacherRoute.route('/teacher/:id')
    .get(teacherController.getAllStudent)
    .delete(teacherController.deleteTeacher)
    .put(teacherController.updateTeacher)

teacherRoute.route('/find')
   .post(teacherController.findTeacher)


  


module.exports = teacherRoute;