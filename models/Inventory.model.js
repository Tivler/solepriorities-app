const mongoose = require('mongoose');

const inventory = new mongoose.Schema({
    item_name: { type: String, required: true },
})

module.exports = Inventory = mongoose.model('inventory', inventory, 'inventory');
