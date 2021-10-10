var exerciceRouter = require('express').Router();
var exerciceController = require("../exercice/exerciceController")

//
exerciceRouter.route('/exercice/:id')
    .post(exerciceController.createExercice)



exerciceRouter.route('exercice')
    .get(exerciceController.allExercice)    




module.exports = exerciceRouter;