var Auth = require("../Athuentication/Auth")
var School = require("../School")
//
exports.createAdmin = (req, res) => {
    // taking the information of the admin 
    // and use distructing to take the password 

    let { User, Password, Email } = req.body
    /// hash the password 
    Auth.HashPass(Password).then(Hashed => {
        //save it into the data base  with the hashed password 
        School.AdminModel.create({ User, Password: Hashed, Email })
            .then(() => {
                res.status(201).send("admin Created")
            })
            //if there is an error 
            .catch((err) => {
                res.send(404).send(err)
            })
    })

};

exports.CheckIfThePassRight = (req, res) => {
    let AdminId = req.params.id
    let { User, Password, Email } = req.body
    School.AdminModel.findById(AdminId, (err, result) => {
        let hashedPass = result.Password
        let UserNameFromDataBase = result.User
        let EmailFromDataBase = result.Email
        if (UserNameFromDataBase === User && EmailFromDataBase === Email) {
            Auth.comparePass(Password, hashedPass).then(bool => {
                console.log(bool)
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
