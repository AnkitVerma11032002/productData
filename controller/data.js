const product = require('../models/data');

async function regdata(req, res) {
    const { name, detail, price, image } = req.body;

    // Input validation 
    if (!name || !detail || !price || !image) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await product.create({
            name,
            detail,
            price,
            image
        });
        console.log(req.body);
        res.json("success");
    } catch (error) {
        console.error('Error in regdata:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getproduct(req, res) {
    try {
        // Retrieve products from the database
        const productData = await product.find();

        res.json(productData);
    } catch (error) {
        console.error('Error in getproduct:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    regdata,
    getproduct
};
