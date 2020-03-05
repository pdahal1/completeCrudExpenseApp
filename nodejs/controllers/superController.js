const express = require('express'); 
var router = express.Router(); 
var ObjectId = require('mongoose').Types.ObjectId;

function gets(mod){
router.get('/', (req, res) => {
  mod.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        `Error in Retrieving the employee` + JSON.stringify(err, undefined, 2)
      );
    }
  });
})
};
    
module.exports = router; 