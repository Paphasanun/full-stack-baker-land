const db = require("../models");


const createDressing = async (req, res) => {
    try {
        const {dressing_name, img_url, price} = req.body;
        const newDressing = await db.Dressing.create({
            dressing_name, 
            img_url,
            price,
        });

        res.status(201).send(newDressing)
    } catch (err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
};

module.exports = {
    createDressing,
}