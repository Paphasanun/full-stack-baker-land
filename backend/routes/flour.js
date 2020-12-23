const { createFlour } = require("../controllers/flourController");
const router = require("express").Router();

router.post('/', createFlour);

module.exports = router;