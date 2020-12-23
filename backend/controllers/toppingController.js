const db = require("../models");


const createTopping = async (req, res) => {
    try {
        const {topping_name, img_url, price} = req.body;
        const newTopping = await db.Topping.create({
            topping_name, 
            img_url,
            price,
        });

        res.status(201).send(newTopping)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createTopping,
}