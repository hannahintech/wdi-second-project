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

// function generateOutfit(req, res) {
//   Item
//     .find()
//     .then((items) => {
//       console.log(items);
//       items.forEach((item) => {
//         getOutfit();
//       });
//       res.render('outfits/all-outfits', outfit);
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
  addItem: createItemRoute
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
