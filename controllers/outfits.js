const Outfit = require('../models/outfit');
const Item = require('../models/item');

function outfitIndex(req, res) {
  Outfit
    .find()
    .populate('createdBy items items.createdBy')
    .exec()
    .then((outfits) => {
      res.render('outfits/index', { outfits });
    });
}


function newOutfit(req, res) {
  Item
    .find()
    .exec()
    .then((items) => {
      res.render('outfits/new', { items });
    });
}

function createOutfit(req, res){
  req.body.createdBy = req.user;

  Outfit
    .create(req.body)
    .then(() => {
      res.redirect('/outfits');
    })
    .catch((err) => {
      console.log(err);
    });
}

function showOutfit(req, res) {

  Outfit
    .findById(req.params.id)
    .populate('createdBy items items.createdBy')
    .exec()
    .then((outfit) => {
      if(!outfit) return res.notFound();
      return res.render('outfits/show', { outfit });
    })
    .catch((err) => {
      console.log(err);
    });
}

function editOutfit(req, res) {

  Outfit
    .findById(req.params.id)
    .exec()
    .then((outfit) => {
      if(!outfit) return res.notFound();
      return res.render('outfits/edit', { outfit });
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateOutfit(req, res) {

  Outfit
    .findById(req.params.id)
    .exec()
    .then((outfit) => {
      if(!outfit) return res.notFound();

      outfit = Object.assign(outfit, req.body);

      return outfit.save();
    })
    .then(() => res.redirect('/outfits'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        // flash message here!
        return res.badRequest(`/outfits/${req.params.id}/edit`, err.toString());
      }
    });
}

function deleteOutfit(req, res, next) {

  Outfit
    .findById(req.params.id)
    .exec()
    .then((outfit) => {
      if(!outfit) return res.notFound();
      return outfit.remove();
    })
    .then(() => res.redirect('/outfits'))
    .catch(next);
}



module.exports = {
  outfitIndex,
  newOutfit,
  createOutfit,
  showOutfit,
  editOutfit,
  updateOutfit,
  deleteOutfit
};
