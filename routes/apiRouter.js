const express = require("express");
const imageController = require("../controllers/apiController.js");
const apiRouter = express.Router();

apiRouter.use("/getFirst", imageController.getFirst);
apiRouter.use("/getArr", imageController.getArr);

module.exports = apiRouter;