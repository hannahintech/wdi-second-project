const Item = require('../models/item');

function newItemRoute(req, res) {
  return res.render('items/new');
}

function itemsIndex(req, res) {
  Item
    .find()
    .populate('createdBy item.createdBy')
    .exec()
    .then((items) => res.render('items/index', { items }));
}

function createItemRoute(req, res){
  console.log(req.body);
  req.body.createdBy = req.user;

  Item
    .create(req.body)
    .then(() => {
      console.log(req.body);
      res.redirect('index');
    })
    .catch((err) => {
      console.log(err);
    });
}

function showItemRoute(req, res) {
  Item
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      return res.render('items/show', { item });
    })
    .catch((err) => {
      console.log(err);
    });
}

function editItemRoute(req, res) {
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      return res.render('items/edit', { item });
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateItemRoute(req, res) {
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();

      item = Object.assign(item, req.body);

      return item.save();
    })
    .then(() => res.redirect(`/items/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/items/${req.params.id}/edit`, err.toString());
      }
    });
}

// function deleteItemRoute(req, res, next) {
//   Item
//     .findById(req.params.id)
//     .exec()
//     .then((item) => {
//       if(!item) return res.notFound();
//       return item.remove();
//     })
//     .then(() => res.redirect('/index'))
//     .catch(next);
// }

module.exports = {
  newItem: newItemRoute,
  addItem: createItemRoute,
  allItems: itemsIndex,
  showItem: showItemRoute,
  editItem: editItemRoute,
  updateItem: updateItemRoute
  // deleteItem: deleteItemRoute
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
// function generateOutfit(req, res) {
//   Item
//     .find()
//     .then((items) => {
//       console.log(items);
//       items.forEach((item) => {
//         getOutfit();
//       });
//       res.render('outfits/index', outfit);
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
