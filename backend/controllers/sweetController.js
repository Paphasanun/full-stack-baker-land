const db = require("../models");


const createSweet = async (req, res) => {
    try {
        const {sweet_type, sweet_value, img_url, price} = req.body;
        const newSweet = await db.Sweet.create({
            sweet_type, 
            sweet_value,
            img_url,
            price,
        });

        res.status(201).send(newSweet)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createSweet,
}