
var School = require("../School")
//
exports.createAdmin = function (req, res) {
    // taking the information of the admin 
    let AdminData = req.body
    //save it into the data base 
    School.AdminModel.create(AdminData)
        .then(() => {
            console.log("admin Created")

        })
        //if there is an error 
        .catch((err) => {
            console.log(err)
        })

};
