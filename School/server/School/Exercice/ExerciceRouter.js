var ExerciceRouter = require("express").Router()
var ExerciceController = require("../Exercice/ExerciceController")

////// either erxercie or lecture o checkpoint i need for teacher to specify which one  i need to delete or update or create or get 

ExerciceRouter.route("/exercie/:id")
    .get(ExerciceController.getExercice)
    .post(ExerciceController.createExercice)
    .put(ExerciceController.updateExercice)
    .delete(ExerciceController.deleteExercice)

module.exports = ExerciceRouter;