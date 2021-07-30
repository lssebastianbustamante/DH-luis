let cartCtrl = {
    listar : function(req, res) {
        res.render('product-cart', { title: 'Cart' });
      },
};

module.exports = cartCtrl;