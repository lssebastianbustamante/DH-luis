let loginCtrl = {
    listar : function(req, res, next) {
        res.render('login', { title: 'Login' });
      },
};

module.exports = loginCtrl;