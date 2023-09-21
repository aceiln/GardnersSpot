const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars engine
const hbs = exphbs.create({
    // Specify your configuration options here
    defaultLayout: 'main', // This sets the default layout to 'main.handlebars'
  });
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

// Define your routes and middleware here

app.get('/', (req, res) => {
  res.render('index'); // Renders the 'index.handlebars' template
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');


// const sequelize = require('./config/connect');

// // Create a new sequelize store using the express-session package
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// // Configure and link a session object with the sequelize store
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// // Add express-session and store as Express.js middleware
// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

// // Environment Variable Configuration
// require('dotenv').config();