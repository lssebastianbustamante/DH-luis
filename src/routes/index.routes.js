const { Router } = require('express');
const router = Router();
const { 
    renderIndex,
    renderProductDetail,
    renderProductCart,
    renderRegister,
    renderLogin
} = require('../controllers/index.controller');

// Home
router.get('/', renderIndex);

// Product Detail
router.get('/product-detail', renderProductDetail);

// Product Cart
router.get('/product-cart', renderProductCart);

// Register
router.get('/register', renderRegister);

// Login
router.get('/login', renderLogin);

module.exports = router;