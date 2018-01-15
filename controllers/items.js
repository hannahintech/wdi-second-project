const Item = require('../models/item');

function createItemRoute(req, res){
  console.log(req.body);
  Item
    .create(req.body)
    .then(() => {
      console.log(req.body);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  addItem: createItemRoute
};
