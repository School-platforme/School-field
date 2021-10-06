var studentRouter = require('express').Router();
var studentController = require("../student/studentController")



studentRouter.route("/student/:id")
    .post(studentController.createStudent)
    
    



module.exports = studentRouter;