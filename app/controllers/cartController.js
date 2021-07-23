let cartCtrl = {
    listar : function(req, res, next) {
        res.render('product-cart', { title: 'Cart' });
      },
};

module.exports = cartCtrl;