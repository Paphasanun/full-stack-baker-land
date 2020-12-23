const db = require("../models");

const createCakeDatail = async (req, res) => {
  try {
    const {
      name,
      total_price,
      shape,
      size,
      flour,
      sweetness,
      layer,
      flavor,
      filling,
      add_on_filling,
      frosting,
      dressing,
      topping,
    } = req.body;
    const newCakeDatail = await db.CakeDatail.create({
      name,
      total_price,
      shape,
      size,
      flour,
      sweetness,
      layer,
      flavor,
      filling,
      add_on_filling,
      frosting,
      dressing,
      topping,
    });

    res.status(201).send(newCakeDatail);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

const getCakeDatail = async (req, res) => {
  const [
    Shape,
    Size,
    Flour,
    Sweetness,
    Layer,
    Flavor,
    Filling,
    AddOnFilling,
    Frosting,
    Dressing,
    Topping,
  ] = await Promise.all([
    db.Shape.findAll(),
    db.Size.findAll(),
    db.Flour.findAll(),
    db.Sweet.findAll(),
    db.Layer.findAll(),
    db.Flavor.findAll(),
    db.Filling.findAll(),
    db.AddOnFilling.findAll(),
    db.Frosting.findAll(),
    db.Dressing.findAll(),
    db.Topping.findAll(),
  ]);
  const data = {
    Shape,
    Size,
    Flour,
    Sweetness,
    Layer,
    Flavor,
    Filling,
    AddOnFilling,
    Frosting,
    Dressing,
    Topping,
  };

  res.send(data);
};

module.exports = {
  createCakeDatail,
  getCakeDatail,
};
