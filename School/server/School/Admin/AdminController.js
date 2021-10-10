var Auth = require("../Athuentication/Auth")
var School = require("../School")
//
exports.createAdmin = (req, res) => {
    // taking the information of the admin 
    // and use distructing to take the password 

    let { User, Password, Email ,ImageUrl} = req.body
    /// hash the password 
    Auth.HashPass(Password).then(Hashed => {
        //save it into the data base  with the hashed password 
        School.AdminModel.create({ User, Password: Hashed, Email,ImageUrl })
            .then(() => {
                res.sendStatus(201)
            })
            //if there is an error 
            .catch((err) => {
               res.sendStatus(404)
            })
    })

};

exports.CheckIfThePassRight = (req, res) => {
   
    let { User, Password } = req.body
    School.AdminModel.findOne({User:User}, (err, result) => {
        let hashedPass = result.Password
        let UserNameFromDataBase = result.User
       
        if (UserNameFromDataBase === User) {
            Auth.comparePass(Password, hashedPass).then(bool => {
                
                if (bool) {
                   
                    res.status(201).send("welcome your data is match the data from data base ")
                } else {
                    res.status(404).send("check your password ")
                }
            })
        } else {
            res.status(404).send("NOT FOUND")
        }

    })

}
