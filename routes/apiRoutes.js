const express = require('express');
const Inventory = require('../models/Inventory.model');
const route = express.Router();

route.get('/inventory' , (req, res) => {
    Inventory.find({})
      .then(data => res.json(data))
      .catch(err => res.send(err))
  })

route.post('/inventoryUpdate', async (req, res) => {
    const { item_name } = req.body;
    let inventory = {};
    inventory.item_name = item_name;

    let inventoryModel = new Inventory(inventory);
    await inventoryModel.save();
    res.json(inventoryModel);
})

module.exports = route;