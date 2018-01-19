const Item = require('../models/item');

function newItem(req, res) {
  return res.render('items/new');
}

function itemsIndex(req, res) {
  Item
    .find()
    .populate('createdBy item.createdBy')
    .exec()
    .then((items) => res.render('items/index', { items }));
}

function myItemsIndex(req, res) {
  Item
    .find()
    .populate('createdBy item.createdBy')
    .exec()
    .then((items) => res.render('items/my-items', { items }));
}

function createItem(req, res){
  req.body.createdBy = req.user;
  req.body.category = req.body.category.parseInt();

  Item
    .create(req.body)
    .sort(req.body.category)
    .then(() => {
      res.redirect('/items');
    })
    .catch((err) => {
      console.log(err);
    });
}

function showItem(req, res) {
  Item
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      return res.render('items/show', { item });
    })
    .catch((err) => {
      console.log(err);
    });
}

function editItem(req, res) {
  req.body.category = req.body.category.parseInt();
  // necessary?
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

function updateItem(req, res) {
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
        // flash message here!
        return res.badRequest(`/items/${req.params.id}/edit`, err.toString());
      }
    });
}

function deleteItem(req, res, next) {
  Item
    .findById(req.params.id)
    .exec()
    .then((item) => {
      if(!item) return res.notFound();
      return item.remove();
    })
    .then(() => res.redirect('/items'))
    .catch(next);
}

module.exports = {
  myItems: myItemsIndex,
  newItem,
  createItem,
  itemsIndex,
  showItem,
  editItem,
  updateItem,
  deleteItem
};
