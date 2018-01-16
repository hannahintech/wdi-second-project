const Item = require('../models/item');

function createItemRoute(req, res){
  console.log(req.body);
  Item
    .create(req.body)
    .then(() => {
      console.log(req.body);
      res.redirect('show-all-items');
    })
    .catch((err) => {
      console.log(err);
    });
}

function showAllItems(req, res) {
  Item
    .find()
    .exec()
    .then((items) => res.render('items/show-all-items', { items }));
}

// function generateOutfit(req, res) {
//   Item
//     .find()
//     .then((items) => {
//       console.log(items);
//       items.forEach((item) => {
//         getOutfit();
//       });
//       res.render('outfits/show-all-items', outfit);
//     });
//
// const getOutfit = function(item) {
//     for((i=0, i<item.length, i++) {
//       let itemCategory = item.find({ category: i })
//       let outfit =+ [itemCategory]
//     });
//     return outfit
//   })
// }

module.exports = {
  addItem: createItemRoute,
  allItems: showAllItems
  // generateOutfit
};


// generate outfit
// find items based on category (ie hat)
// will see an array of items (hats)
// pick one (hat)
// randomly choose a hat
// store that hat as an element of a new array 'itemGroup'
// repeat 8 times
// then you have a complete "itemGroup"
// which can then be displayed using ejs
// explore mongoose methods
