const User = require('../models/user');

// Render the registration form
function newRoute(req, res) {
  res.render('registrations/new');
}

// Register a user
function createRoute(req, res, next){
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.username}! Please log in`);
      res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match'});
      }
      next(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
