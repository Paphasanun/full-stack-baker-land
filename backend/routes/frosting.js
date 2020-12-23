const { createFrosting } = require("../controllers/frostingController");
const router = require("express").Router();

router.post('/', createFrosting);

module.exports = router;