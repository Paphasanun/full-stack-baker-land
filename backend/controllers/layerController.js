const db = require("../models");


const createLayer = async (req, res) => {
    try {
        const {layer_name, img_url, price} = req.body;
        const newLayer = await db.Layer.create({
            layer_name, 
            img_url,
            price,
        });

        res.status(201).send(newLayer)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createLayer,
}