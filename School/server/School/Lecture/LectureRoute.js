var LectureRouter = require("express").Router()
var LectureController = require("../Lecture/LectureController")


//  I need the teacher id because he is responsible for lecture 
LectureRouter.route("/lecture/:id")
    .post(LectureController.createLecture)
    .get(LectureController.getTheLecture)
    .put(LectureController.updateLecture)
    .delete(LectureController.deleteLecture)






module.exports = LectureRouter