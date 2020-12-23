const { createCake } = require("../controllers/cakeController");
const router = require("express").Router();

router.post('/', createCake);

module.exports = router;