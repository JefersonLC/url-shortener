const express = require('express');
const Yup = require('yup');
const flash = require('connect-flash');
const session = require('express-session');
const { initializeApp } = require('firebase/app');
const { getDatabase, set, ref, get, child } = require('firebase/database');
const SUI = require('short-unique-id');
const { DB_URL, DOMAIN, SECRET } = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

const URL_SCHEMA = Yup.string().url().required();
const generateId = new SUI({ length: 8 });

initializeApp({
  databaseURL: DB_URL,
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(
  session({
    secret: SECRET,
    saveUninitialized: true,
    resave: false,
  })
);
app.use(flash());

app.get('/', (req, res) => {
  const message = req.flash();
  return res.render('index', {
    message: message,
  });
});

app.post(
  '/',
  async (req, res, next) => {
    try {
      const { url } = req.body;
      await URL_SCHEMA.validate(url);
    } catch (error) {
      next(error);
    }
    next();
  },
  async (req, res) => {
    const { url } = req.body;
    const db = getDatabase();
    const newId = generateId();

    await set(ref(db, 'urls/' + newId), {
      originalUrl: url,
      shortenedUrl: DOMAIN + newId,
    });

    const response = await get(child(ref(db), 'urls/' + newId));
    const { shortenedUrl } = response.val();

    req.flash('SUCCESS_MSSG', [shortenedUrl]);
    return res.redirect('/');
  }
);

app.get('/:id', async (req, res, next) => {
  try {
    const db = getDatabase();
    const { id } = req.params;
    const response = await get(child(ref(db), 'urls/' + id));
    const { originalUrl } = response.val();
    return res.render('redirect', {
      url: originalUrl,
    });
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  let message;
  if (error.errors) message = error.errors;
  else message = ['Unexpected error'];
  req.flash('ERROR_MSSG', message);
  return res.redirect('/');
});
