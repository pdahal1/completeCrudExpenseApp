const mongoose = require('mongoose'); 
var User = mongoose.model('User', {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    age: { type: Number },
}); 

module.exports = { User }; 



