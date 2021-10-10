var School = require('../School')
var mongoose = require('mongoose')


exports.createLecture = (req,res) => {
    const Lecture = req.body
    const teacherId = req.params.id

      School.LectureModel.create(Lecture)
            .then(rst => {
               return School.TeacherModel.findByIdAndUpdate(teacherId,{
                   $push:{
                       Lecture:rst 
                   }
               })
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