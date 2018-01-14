const User = require('../models/user');

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
  res.render('statics/all-outfits-public');
}

module.exports = {
  index: indexRoute,
  // secret: secretRoute
  allOutfitsPublic: allOutfitsPublicRoute
};
