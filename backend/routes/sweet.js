const { createSweet } = require("../controllers/sweetController");
const router = require("express").Router();

router.post('/', createSweet);

module.exports = router;