const db = require("../models");

const createAddress = async (req, res) => {
  try {
    const targetUser = await db.User.findOne({ where: { id: req.user.id } });
    if (targetUser) {
      const { firstName, lastName, address, phone_number } = req.body;
      const newAddress = await db.Address.create({
        firstName,
        lastName,
        address,
        phone_number,
      });

      res.status(201).send(newAddress);
    } else {
        res.status(400).send({message: "ไม่พบ user นี้"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createAddress,
};
