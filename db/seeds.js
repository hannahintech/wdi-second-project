const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Item = require('../models/item');
const User = require('../models/user'); // just for development

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/clothes-randomiser-development';
mongoose.connect(dbURI);

Item
  .create([{
    category: ['top'],
    colour: ['red', 'black', 'blue'],
    pattern: ['floral'],
    weatherUse: ['mild', 'warm'],
    image: 'https://jigsaw.btxmedia.com/pws/client/images/catalogue/products/1014404/AS011/large/1014404_4.jpg',
    specialOccassion: true
  },{
    category: ['trousers'],
    colour: ['white'],
    pattern: ['plain'],
    weatherUse: ['warm'],
    image: 'https://jigsaw.btxmedia.com/pws/client/images/catalogue/products/1014404/AS011/large/1014404_4.jpg',
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


Item.collection.drop();
User.collection.drop();
