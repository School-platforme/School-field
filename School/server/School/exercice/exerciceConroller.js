var School = require('../School')
var mongoose = require('mongoose')


exports.createExercice = (req,res) => {
    const Exercice = req.body
    const teacherId = req.params.teacherId
    School.ExerciceModel.create(Exercice)
           .then(rst => {
               return School.TeacherModel.findByIdAndUpdate(teacherId,{
                   $push:{
                       Exercice: rst
                   }
               })
           })
}



exports.allExercice = (req,res) => {
    School.ExerciceModel.find({}, (err,rst)=>{
           if(err) res.status(500).send(err)
           res.status(200).send(rst)

    })
}


