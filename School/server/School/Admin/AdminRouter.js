var AdminRoute = require('express').Router();
var AdminController = require("../Admin/AdminController")


AdminRoute.route('/admin')
    .post(AdminController.createAdmin)


module.exports = AdminRoute