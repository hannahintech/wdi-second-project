const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const statics = require('../controllers/statics');
const outfits = require('../controllers/outfits');
const items = require('../controllers/items');
const users = require('../controllers/users');
// const secureRoute = require('../lib/secureRoute');

router.route('/')
  .get(statics.index);

// nb path for url is not the same as ejs file name, can I have duplicate url paths? (with separate statics?)
router.route('/items')
  .get(items.itemsIndex);
// .get(items.generateOutfit);

router.route('/my-items')
  .get(items.myItems);

router.route('/items/new')
  .get(items.newItem);

router.route('/items')
  .post(items.createItem);

router.route('/items/:id')
  .get(items.showItem)
  .put(items.updateItem)
  .delete(items.deleteItem);

router.route('/items/:id/edit')
  .get(items.editItem);

router.route('/outfits')
  .get(outfits.outfitIndex);

router.route('/my-outfits')
  .get(outfits.myOutfits);

router.route('/outfits')
  .post(outfits.createOutfit);

router.route('/outfits/new')
  .get(outfits.newOutfit);

router.route('/outfits/:id')
  .get(outfits.showOutfit)
  .put(outfits.updateOutfit)
  .delete(outfits.deleteOutfit);

router.route('/outfits/:id/edit')
  .get(outfits.editOutfit);

router.route('/outfits/:id/favourite')
  .post(users.addToFavourites);

router.route('/outfits/:id/unfavourite')
  .post(users.removeFromFavourites);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
