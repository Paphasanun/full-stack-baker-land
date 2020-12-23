const { createDressing } = require("../controllers/dressingController");
const router = require("express").Router();

router.post('/', createDressing);

module.exports = router;