const db = require("../models");


const createSize = async (req, res) => {
    try {
        const {size_name, img_url, price} = req.body;
        const newSize = await db.Size.create({
            size_name, 
            img_url,
            price,
        });

        res.status(201).send(newSize)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createSize,
}