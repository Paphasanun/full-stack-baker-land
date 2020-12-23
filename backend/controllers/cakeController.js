const db = require("../models");

const createCake = async (req, res) => {
    try {
        const {cake_name, total_price} = req.body;
        const newCake = await db.Cake.create({
            cake_name, 
            total_price,
        });

        res.status(201).send(newCake)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createCake,
}

