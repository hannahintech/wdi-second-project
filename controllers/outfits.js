const Outfit = require('../models/outfit');


function allOutfitsRoute(req, res) {
  Outfit
    .find()
    .populate('items')
    .exec()
    .then((outfits) => res.render('outfits/all-outfits', { outfits }));
}



module.exports = {
  allOutfits: allOutfitsRoute
};
