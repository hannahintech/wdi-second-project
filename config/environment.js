const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/clothes-randomiser';
const secret = process.env.SESSION_SECRET || 'secret';

module.exports = { port, env, dbURI, secret };
