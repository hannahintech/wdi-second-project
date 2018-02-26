const User = require('../models/user');
const Outfit  = require('../models/outfit');

function addToFavourites(req, res, next) {

  User
    .findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) return res.notFound();
      Outfit
        .findById(req.params.id)
        .exec()
        .then((outfit) => {
          if (user.favouriteOutfits.indexOf(outfit.id) === -1) {
            user.favouriteOutfits.push(outfit.id);
            req.flash('success', 'You have saved this item as a favourite!');
          } else {
            req.flash('danger', 'You already have this item saved as a favourite!');
          }
        });
      return user.save();
    })
    .then(() => {
      res.redirect(`/outfits/${req.params.id}`);
    })
    .catch(next);
}

function removeFromFavourites(req, res, next) {

  User
    .findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user) return res.notFound();
      Outfit
        .findById(req.params.id)
        .exec()
        .then((outfit) => {
          if (user.favouriteOutfits.indexOf(outfit.id) !== -1) {
            user.favouriteOutfits.remove(outfit.id);
            req.flash('danger', 'You have removed this item as a favourite!');
          } else {
            req.flash('warning', 'You have already removed this item as a favourite!');
          }
        });
      return user.save();
    })
    .then(() => {
      res.redirect(`/outfits/${req.params.id}`);
    })
    .catch(next);
}

module.exports = {
  addToFavourites,
  removeFromFavourites
};
