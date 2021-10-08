var studentRouter = require('express').Router();
var studentController = require("../student/studentController")

//

studentRouter.route("/student/:id")
    .post(studentController.createStudent)



    studentRouter.route('/findstudent')
    .post(studentController.findStudent)     
    
    
module.exports = studentRouter;