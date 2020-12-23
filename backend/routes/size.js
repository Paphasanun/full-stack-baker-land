const { createSize } = require("../controllers/sizeController");
const router = require("express").Router();

router.post('/', createSize);

module.exports = router;