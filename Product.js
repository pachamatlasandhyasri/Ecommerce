import React from 'react';

const Product = mongoose.model('Product', new mongoose.Schema({
    title:String,
    description: String,
    price: Number,
    image: String,
  }));
  app.get('/api/products', async(req, res) => {
    try{
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Server Error'});
    }
  });
  
  export default Product;