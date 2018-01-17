const express        = require('express');
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const routes         = require('./config/routes');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const session        = require('express-session');
const flash          = require('express-flash');
const methodOverride = require('method-override');
const customResponses = require('./lib/customResponses');
const authentication = require('./lib/authentication');
const errorHandler = require('./lib/errorHandler');


const { port, env, dbURI, secret } = require('./config/environment');
// is the dot necessary at all?

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(customResponses);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(authentication);
app.use(routes);
app.use(errorHandler);


app.listen(port, () => console.log(`Express is listening on port ${port}`));
