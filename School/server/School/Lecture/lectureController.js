var School = require('../School')
var mongoose = require('mongoose')


exports.createLecture = (req,res) => {
    const Lecture = req.body.Lecture
    const teacherId = req.params.id
    const LectureName = req.body.LectureName

      School.LectureModel.create({Lecture,teacherId,LectureName})
            .then(rst => {
               return School.TeacherModel.findByIdAndUpdate(teacherId,{
                   $push:{
                       Lecture:rst 
                   }
               })
            })
            .then(()=> {
                res.status(201).send()
            })
            .catch(err => {
                console.log(err)
            })
}


exports.allLecture = (req,res) => {
    School.LectureModel.find({}, (err,rst)=>{
           if(err) res.status(500).send(err)
           res.status(200).send(rst)

    })
}