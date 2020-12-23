const db = require("../models");


const createShape = async (req, res) => {
    try {
        const {shape_name, img_url, price} = req.body;
        const newShape = await db.Shape.create({
            shape_name, 
            img_url,
            price,
        });

        res.status(201).send(newShape)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createShape,
}