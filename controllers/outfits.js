
const Item = require('../models/item');


function allOutfitsRoute(req, res) {
  Item
    .find()
    .exec()
    .then((items) => res.render('outfits/all-outfits', {items}));
}

module.exports = {
  allOutfits: allOutfitsRoute
};
