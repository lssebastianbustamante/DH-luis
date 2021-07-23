let registerCtrl = {
    listar : function(req, res, next) {
        res.render('login', { title: 'Register' });
      },
};

module.exports = registerCtrl;