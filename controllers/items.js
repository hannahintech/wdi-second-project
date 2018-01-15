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
  // find items based on category (ie hat)
    .findOne(req.category)
    .then((items) => {
      console.log(items);
      res.render('outfits/all-outfits', { items });
    });
  // will see an array of items (hats)
  // pick one (hat)
  // randomly choose a hat
  // store that hat as an element of a new array 'itemGroup'
  // repeat 8 times
  // then you have a complete "itemGroup"
  // which can then be displayed using ejs
  // explore mongoose methods
}

module.exports = {
  addItem: createItemRoute,
  generateOutfit
};
