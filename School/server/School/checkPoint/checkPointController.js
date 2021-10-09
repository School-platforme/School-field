var School = require("../School")



exports.createCheckPoint = (req,res)=>{
    let teacherId = req.params.id
    let quizArray = req.body.quizArray
    let name = req.body.name 

    School.checkPointModel.create({quizArray,name})
    .then(data=>{
        console.log(data)
        return  School.TeacherModel.findByIdAndUpdate(teacherId,{
            $push:{
                Quiz:data 
            }


        })
    }).then( (d)=>{
        console.log(d)
        res.status(200).send()
    }).catch((err)=>{
        console.log('eror')
        res.status(404).send(err)
    })
}
