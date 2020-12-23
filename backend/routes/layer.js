const { createLayer } = require("../controllers/layerController");
const router = require("express").Router();

router.post('/', createLayer);

module.exports = router;