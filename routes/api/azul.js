const router = require("express").Router();
const azulController = require("../../controllers/azulController");

// Matches with "/api/employees"
router.route("/")
  .get(azulController.findAll)
  .post(azulController.create);

// Matches with "/api/employees/:id"
router
  .route("/:id")
  .get(azulController.findById)
  .put(azulController.update)
  .delete(azulController.remove);

module.exports = router;
