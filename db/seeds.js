const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Item = require('../models/item');
const Outfit = require('../models/outfit');
// const User = require('../models/user'); // just for development

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/clothes-randomiser';
mongoose.connect(dbURI);

Outfit.collection.drop();

Item
  .create([{
    category: 'top',
    colour: ['red', 'black', 'blue'],
    pattern: 'floral',
    weather: ['mild', 'warm'],
    image: 'https://jigsaw.btxmedia.com/pws/client/images/catalogue/products/1014404/AS011/large/1014404_4.jpg',
    specialOccassion: true
  },{
    category: 'trousers',
    colour: ['blue'],
    pattern: 'plain',
    weather: ['warm'],
    image: 'https://media.frenchconnection.com/ms/fcuk/541zp_11.jpg?height=1537&width=1024',
    specialOccassion: true
  }])
  .then((items) => {
    console.log(`${items.length} items created!`);
    console.log(items);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
