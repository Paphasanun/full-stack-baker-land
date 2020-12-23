const { createCakeDatail, getCakeDatail } = require("../controllers/cakeDatailController");
const router = require("express").Router();

router.post('/', createCakeDatail);
router.get('/', getCakeDatail);

module.exports = router;