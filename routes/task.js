const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.get("/", taskController.findAll);
router.get("/:id", taskController.findById);
router.delete("/:id", taskController.delete);
router.put("/:id", taskController.update);
router.post("/", taskController.create);


module.exports = router;
