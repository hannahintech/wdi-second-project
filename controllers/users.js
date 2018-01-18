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
          user.favouriteOutfits.push(outfit.id);
        });
      return user.save();
    })
    .then(() => {
      res.redirect(`/outfits/${req.params.id}`);
    })
    .catch(next);
}

// nb add logic so you can only favourite once

module.exports = {
  addToFavourites
};
