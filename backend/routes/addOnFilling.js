const { createAddOnFilling } = require("../controllers/addOnFillingController");
const router = require("express").Router();

router.post('/', createAddOnFilling);

module.exports = router;