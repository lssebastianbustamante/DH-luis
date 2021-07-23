let productCtrl = {
    listar : function(req, res, next) {
        res.render('product-detail', { title: 'Product' });
      },
};

module.exports = productCtrl;