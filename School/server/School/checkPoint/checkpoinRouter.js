var checkPointRouter = require('express').Router();
var checkPointController = require("../checkPoint/checkPointController")

//
checkPointRouter.route('/checkpoint/:id')
    .post(checkPointController.createCheckPoint)
    .get(checkPointController.getCheckponit)
    .delete(checkPointController.deleteCheckpoint)
    


checkPointRouter.route('Checkpoint')
    .get(checkPointController.allCheckpoint)    




module.exports = checkPointRouter;