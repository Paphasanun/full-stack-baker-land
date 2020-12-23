const router = require("express").Router();
const passport = require("passport");
const { createAddress } = require("../controllers/addressController");

const auth = passport.authenticate("jwt-auth", { session: false });

router.post("/", auth, createAddress);

module.exports = router;
