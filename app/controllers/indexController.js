let indexCtrl = {
    listar : function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
};

module.exports = indexCtrl;