var AdminRoute = require('express').Router();
var AdminController = require("../Admin/AdminController")

//
AdminRoute.route('/admin')
    .post(AdminController.createAdmin)
AdminRoute.route('/admin/:id')
    .post(AdminController.CheckIfThePassRight)




module.exports = AdminRoute