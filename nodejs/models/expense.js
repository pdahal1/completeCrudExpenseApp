const mongoose = require('mongoose');


var Expense = mongoose.model('Expense', {
    date: { type: Date},
    catagory: { type: String },
    where: { type: String },
    amount: { type: Number }
    
}); 

module.exports = { Expense };