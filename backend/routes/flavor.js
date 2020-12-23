const { createFlavor } = require("../controllers/flavorController");
const router = require("express").Router();

router.post('/', createFlavor);

module.exports = router;