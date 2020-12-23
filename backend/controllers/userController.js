const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password, email, phone_number } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });
    if (targetUser) {
      res.status(400).send({ message: "Username already taken." });
    } else {
      const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
      const hashedPW = bcrypt.hashSync(password, salt);

      await db.User.create({
        username,
        email,
        password: hashedPW,
        phone_number,
      });

      res.status(201).send({ message: "User created." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const targetUser = await db.User.findOne({ where: { username } });

    if (targetUser) {
      if (bcrypt.compareSync(password, targetUser.password)) {
        const token = jwt.sign({ id: targetUser.id }, process.env.SECRET, {
          expiresIn: 3600,
        });
        res.status(200).send({ token });
      } else {
        res.status(400).send({ message: "Username or password incorrect." });
      }
    } else {
      res.status(400).send({ message: "Username or password incorrect." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  register,
  login,
};
