const { createFilling } = require("../controllers/fillingController");
const router = require("express").Router();

router.post('/', createFilling);

module.exports = router;