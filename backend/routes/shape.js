const { createShape } = require("../controllers/shapeController");
const router = require("express").Router();

router.post('/', createShape);

module.exports = router;