var checkPointRouter = require('express').Router();
var checkPointController = require("../checkPoint/checkPointController")

//
checkPointRouter.route('/checkpoint/:id')
    .post(checkPointController.createCheckPoint)






module.exports = checkPointRouter;