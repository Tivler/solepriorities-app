const mongoose = require('mongoose');

const inventory = new mongoose.Schema({
    item_selling_price: { type: Number },
    purchase_date: { type: String },
    purchase_price: { type: Number },
    item_name: { type: String },
    item_size: { type: String },
    item_conditon: { type: String },
    item_sku: { type: String }
})

module.exports = Inventory = mongoose.model('inventory', inventory, 'inventory');
