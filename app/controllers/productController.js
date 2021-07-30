let productCtrl = {
    listar : function(req, res) {
        res.render('product-detail', { title: 'Product' });
      },
};

module.exports = productCtrl;