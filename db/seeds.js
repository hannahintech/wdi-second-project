
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Item = require('../models/item');
const Outfit = require('../models/outfit');
// const User = require('../models/user'); // just for development

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/clothes-randomiser';
mongoose.connect(dbURI);

Item.collection.drop();
Outfit.collection.drop();

Item
  .create([{
    colour: [ 'red', 'black', 'blue' ],
    weather: [ 'mild', 'warm' ],
    category: '4',
    pattern: 'floral',
    image: 'https://jigsaw.btxmedia.com/pws/client/images/catalogue/products/1014404/AS011/large/1014404_4.jpg',
    specialOccassion: true
  }, {
    colour: [ 'blue' ],
    weather: [ 'warm' ],
    category: '5',
    pattern: 'plain',
    image: 'https://media.frenchconnection.com/ms/fcuk/541zp_11.jpg?height=1537&width=1024',
    specialOccassion: true
  },{
    colour: [ 'multi-coloured' ],
    weather: [ 'cold' ],
    category: '1',
    pattern: 'other',
    image: 'https://cdn.shopify.com/s/files/1/0031/6602/products/unicorn_beanie_2_large.jpg'
  },{
    colour: [ 'other' ],
    weather: [ 'warm', 'mild' ],
    category: '5',
    pattern: 'plain',
    image: 'https://i.pinimg.com/originals/c2/86/58/c28658d636fa27548f2db7a64ce4714e.jpg'
  },{
    colour: [ 'other' ],
    weather: [ 'mild' ],
    category: '1',
    pattern: 'plain',
    image: 'https://media.christys-hats.com/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/c/s/cst100006.jpg'
  },{
    colour: [ 'other' ],
    weather: [ 'mild' ],
    category: '5',
    pattern: 'other',
    image: 'https://www.attitudeclothing.co.uk/images/punk-rave-blitzkrieg-dress-p16886-18469_image.jpg'
  },{
    colour: [ 'red' ],
    weather: [ 'mild' ],
    category: '5',
    pattern: 'checkered',
    image: 'https://www.thekiltlady.ca/wp-content/uploads/2016/08/sporran-package-02.jpg'
  },{
    colour: [ 'green' ],
    weather: [ 'hot', 'warm', 'mild', 'cold' ],
    category: '7',
    pattern: 'striped',
    image: 'https://cdn.shopify.com/s/files/1/0751/4097/products/sets-green-gold-and-turquoise-fused-dichroic-glass-pendant-and-earrings-jewellery-set-3_large.jpg?v=1510858634'
  },{
    colour: [ 'other' ],
    weather: [ 'hot', 'warm' ],
    category: '4',
    pattern: 'symbol',
    image: 'http://www.blindspolesandtracks.co.uk/images/image/Men%20%20T-Shirts%20-%20Fair%20Is%20Foul%20T-Shirt%20-%20White%20multi%20-%20447G849.jpg'
  },{
    colour: [ 'blue' ],
    weather: [ 'warm', 'mild' ],
    category: '4',
    pattern: 'hobby related',
    image: 'http://www.timecity.eu/_clientfiles/arts/lg/CD1201BSTT.jpg'
  },{
    colour: [ 'blue' ],
    weather: [ 'warm', 'mild' ],
    category: '1',
    pattern: 'plain',
    image: 'http://beljacobs.com/wp-content/uploads/2015/03/webred3.jpg'
  },{
    colour: [ 'multi-coloured' ],
    weather: [ 'warm', 'mild' ],
    category: '4',
    pattern: 'geometric pattern', image: 'https://i.pinimg.com/736x/41/33/26/413326b9202845832e124c0463884da4--a-child-menswear.jpg'
  },{
    colour: [ 'black', 'whit' ],
    weather: [ 'mild' ],
    category: '5',
    pattern: 'geometric pattern',
    image: 'https://cdnb.lystit.com/photos/2010/12/15/a-child-of-the-jago-black-dazzle-jean-product-1-146006-233385912.jpeg'
  },{
    colour: [ 'other' ],
    weather: [ 'mild', 'cold' ],
    category: '3',
    pattern: 'plain',
    image: 'https://i.pinimg.com/736x/d7/f2/9e/d7f29e316b4bbd09d3f13476544d7a82--grey-suits-mens-suits.jpg'
  },{
    colour: [ 'whit' ],
    weather: [ 'hot' ],
    category: '5',
    pattern: 'plain',
    image: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/03/13/thumb-img/1489370367227506942.jpg'
  },{
    colour: [ 'orange', 'black' ],
    weather: [ 'hot' ],
    category: '5',
    pattern: 'geometric pattern',
    image: 'https://cdn.shopify.com/s/files/1/0684/2619/products/Adisa_African_Print_formal_dress_yellow_black_kente.jpg?v=1513104810'
  },{
    colour: [ 'violet', 'multi-coloured' ],
    weather: [ 'warm', 'mild' ],
    category: '5',
    pattern: 'geometric pattern',
    image: 'https://cdn.shopify.com/s/files/1/0684/2619/products/African_Print_Ruffle_Sleeve_Shift_Dress_Purple.jpg?v=1510841287'
  },{
    colour: [ 'green' ],
    weather: [ 'warm', 'mild' ],
    category: '5',
    pattern: 'geometric pattern',
    image: 'http://www.melamela.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/9/1970s-vintage-dress-laura-ashley-green-white-floral-pattern-side.jpg'
  },{
    colour: [ 'blue', 'other' ],
    weather: [ 'mild', 'cold' ],
    category: '6',
    pattern: 'plain',
    image: 'https://sep.yimg.com/ay/langstons/lane-boots-women-s-dawson-cowboy-boots-turquoise-brown-114849.jpg'
  },{
    colour: [ 'green' ],
    weather: [ 'mild' ],
    category: '1',
    pattern: 'plain',
    image: 'https://www.villagehatshop.com/photos/product/standard/4511390S439760/derby-bowler-hats/low-crown-wool-felt-bowler-hat.jpg'
  },{
    colour: [ 'blue-green' ],
    weather: [ 'hot', 'warm', 'mild' ],
    category: '6',
    pattern: 'other',
    image: 'http://www.beyond-skin.com/fr/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/p/a/paris-petrol-faux-snake-fashion-vegan-stilettos.jpg'
  },{
    colour: [ 'white' ],
    weather: [ 'mild', 'cold' ],
    category: '5',
    pattern: 'plain',
    image: 'https://p1.liveauctioneers.com/406/10625/2501999_1_x.jpg?version=0&width=1600&format=pjpg&auto=webp'
  },{
    colour: [ 'blue' ],
    weather: [ 'warm', 'mild' ],
    category: '5',
    pattern: 'plain',
    image: 'https://www.dhresource.com/albu_818952035_00-1.0x0/marie-antoinette-victorian-period-dress-satin.jpg'
  },{
    category: '5',
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
