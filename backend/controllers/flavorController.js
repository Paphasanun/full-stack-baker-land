const db = require("../models");


const createFlavor = async (req, res) => {
    try {
        const {flavor_name, img_url, price} = req.body;
        const newFlavor = await db.Flavor.create({
            flavor_name, 
            img_url,
            price,
        });

        res.status(201).send(newFlavor)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createFlavor,
}