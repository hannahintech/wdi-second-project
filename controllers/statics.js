const User = require('../models/user');
const Item = require('../models/item');

// ask what "users" does!
function indexRoute(req, res) {
  User
    .find()
    .exec()
    .then((users) => res.render('statics/index', { users }));
}

// function secretRoute(req, res) {
//   res.render('secret');
// }

function allOutfitsPublicRoute(req, res) {
  Item
    .find()
    .exec()
    .then((items) => res.render('statics/all-outfits-public', {items}));
}

module.exports = {
  index: indexRoute,
  // secret: secretRoute
  allOutfitsPublic: allOutfitsPublicRoute
};
