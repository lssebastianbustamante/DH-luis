const express = require('express');
const cartCtrl = require('../controllers/cartController');
const indexCtrl = require('../controllers/indexController');
const loginCtrl = require('../controllers/loginController');
const productCtrl = require('../controllers/productController');
const registerCtrl = require('../controllers/registerController');


const router = express.Router();


/* GET home page. */
router.get('/', indexCtrl.listar);


/* GET product page. */
router.get('/product-detail', productCtrl.listar);

/* GET login page. */
router.get('/login', loginCtrl.listar);

/* GET register page. */
router.get('/register', registerCtrl.listar);

/* GET register page. */
router.get('/cart', cartCtrl.listar);


module.exports = router;
