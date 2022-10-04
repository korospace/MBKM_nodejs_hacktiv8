const router = require("express").Router();
const PhotosController = require("../controllers/photosController");

router.get("/photo", PhotosController.getAll);
router.get("/photo/:id", PhotosController.getById);
router.post("/photo", PhotosController.createPhoto);
router.put("/photo/:id", PhotosController.updatePhoto);
router.delete("/photo/:id", PhotosController.deletePhoto);

module.exports = router;