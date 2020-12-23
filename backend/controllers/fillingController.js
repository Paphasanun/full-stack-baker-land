const db = require("../models");


const createFilling = async (req, res) => {
    try {
        const {filling_name, img_url, price} = req.body;
        const newFilling = await db.Filling.create({
            filling_name, 
            img_url,
            price,
        });

        res.status(201).send(newFilling)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createFilling,
}