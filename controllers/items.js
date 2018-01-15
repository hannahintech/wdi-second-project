const Item = require('../models/item');

function createItemRoute(req, res){
  console.log(req.body);
  Item
    .create(req.body)
    .then(() => {
      console.log(req.body);
      res.redirect('all-outfits');
    })
    .catch((err) => {
      console.log(err);
    });
}

function generateOutfit(req, res) {
  Item
    .find('category')
  // look through items based on category and pick one of each (every hat)
  // array of items (hats)
  // randomly choose a hat
  // store that in an element of a new array
  // repeat 8 times
  // then you have an "outfit"
  // which can then be displayed using ejs
  // mongoose methods
}

module.exports = {
  addItem: createItemRoute
  generateOutfit
};
