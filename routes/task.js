const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();
const auth = require('../middleware/auth')

router.get("/", auth,  taskController.findAll);
router.get("/:id", auth, taskController.findById);
router.delete("/:id", auth, taskController.delete);
router.put("/:id", auth, taskController.update);
router.post("/", auth, taskController.create);


module.exports = router;
