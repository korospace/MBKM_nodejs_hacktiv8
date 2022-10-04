const router = require("express").Router();
const { application } = require("express");
const PhotosController = require("../controllers/photosController");
const UsersController = require("../controllers/usersController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const { body } = require('express-validator');

router.post("/user/register", UsersController.register);
router.post("/user/login", UsersController.login);

router.use(authentication);

router.get("/photo", PhotosController.getAll);
router.get("/photo/:id", PhotosController.getById);
router.post(
    "/photo",
    body('title').not().isEmpty().isLength({max:255}),
    body('caption').not().isEmpty().isLength({max:255}),
    body('image_url').not().isEmpty(), 
    PhotosController.createPhoto
);

router.use("/photo/:id", authorization);

router.put("/photo/:id", PhotosController.updatePhoto);
router.delete("/photo/:id", PhotosController.deletePhoto);

module.exports = router;