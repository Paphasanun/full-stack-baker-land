const db = require("../models");


const createAddOnFilling = async (req, res) => {
    try {
        const {addOnFilling_name, img_url, price} = req.body;
        const newAddOnFilling = await db.AddOnFilling.create({
            addOnFilling_name, 
            img_url,
            price,
        });

        res.status(201).send(newAddOnFilling)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createAddOnFilling,
}