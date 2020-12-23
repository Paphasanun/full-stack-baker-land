const { createTopping } = require("../controllers/toppingController");
const router = require("express").Router();

router.post('/', createTopping);

module.exports = router;