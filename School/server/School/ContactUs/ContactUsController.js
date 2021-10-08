var School = require("../School")


exports.saveContactUs = (req,res)=>{
    let contactUs =req.body 
    School.contactUsModel.create(contactUs)
    .then(()=>{
        res.sendStatus(201)
    })
    .catch((err)=>{

        res.sendStatus(404)
    })
}


exports.getAllContactUs = (req,res)=>{
   School.contactUsModel.find({},(err,result)=>{
    if(err){
        res.sendStatus(404)
    }
    res.status(200).send(result)
   }) 

}

