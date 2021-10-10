var School = require("../School")



exports.createCheckPoint = (req,res)=>{
    let teacherId = req.params.id
    let quizArray = req.body.quizArray
    let name = req.body.name 

    School.checkPointModel.create({quizArray,name})
    .then(data=>{
        
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



exports.allCheckpoint = (req,res) => {
    School.checkPointModel.find({}, (err,rst)=>{
           if(err) res.status(500).send(err)
           res.status(200).send(rst)

    })
}
