var ResultRoute = require("express").Router()
var resultController = require("./ResultController")

ResultRoute.route("/result/:id")
    .post(resultController.addResult)

module.exports = ResultRoute