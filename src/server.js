const express = require('express');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false})); // Convierte las peticiones a JSON
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png'))) //Favicon

// Global Variables

// Routes
app.use(require('./routes/index.routes'));

app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/product-detail.html'));
})

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;