const express = require('express');
const Inventory = require('../models/Inventory.model');
const route = express.Router();

route.get('/inventory' , (req, res) => {
    Inventory.find({})
      .then(data => res.json(data))
      .catch(err => res.send(err))
  })

route.post('/inventoryUpdate', (req, res) => {
    const {item_selling_price , purchase_date , purchase_price , item_name , item_size , item_condition , item_sku } = req.body;

    const i = new Inventory({
      item_selling_price,
      purchase_date,
      purchase_price,
      item_name,
      item_size,
      item_condition,
      item_sku
    });
   
    i.save();
    res.json(i)
})

module.exports = route;