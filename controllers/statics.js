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



module.exports = {
  index: indexRoute
  // secret: secretRoute
};
