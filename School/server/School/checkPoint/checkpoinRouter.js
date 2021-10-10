var checkPointRouter = require('express').Router();
var checkPointController = require("../checkPoint/checkPointController")

//
checkPointRouter.route('/checkpoint/:id')
    .post(checkPointController.createCheckPoint)



checkPointRouter.route('Checkpoint')
    .get(checkPointController.allCheckpoint)    




module.exports = checkPointRouter;