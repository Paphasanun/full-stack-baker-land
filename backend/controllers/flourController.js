const db = require("../models");


const createFlour = async (req, res) => {
    try {
        const {flour_name, img_url, price} = req.body;
        const newFlour = await db.Flour.create({
            flour_name, 
            img_url,
            price,
        });

        res.status(201).send(newFlour)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createFlour,
}