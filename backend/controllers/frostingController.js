const db = require("../models");


const createFrosting = async (req, res) => {
    try {
        const {frosting_name, img_url, price} = req.body;
        const newFrosting = await db.Frosting.create({
            frosting_name, 
            img_url,
            price,
        });

        res.status(201).send(newFrosting)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createFrosting,
}