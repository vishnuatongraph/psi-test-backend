const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();

router.get("/", userController.findAll);
router.post("/", userController.create);
router.post("/login", userController.findById);
router.get("/:id", userController.findById);
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);







module.exports = router;
