const express  = require('express');
const router   = express.Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const statics = require('../controllers/statics');
const outfits = require('../controllers/outfits');



router.route('/')
  .get(statics.index);

// nb path for url is not the same as ejs file name, can I have duplicate url paths? (with separate statics?)
router.route('/all-outfits')
  .get(outfits.allOutfits);

router.get('/generate-outfit', (req, res) => res.render('outfits/generate-outfit.ejs'));
router.get('/add-item', (req, res) => res.render('items/add-item.ejs'));


// registration related
router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
