let indexCtrl = {
    listar : function(req, res) {
        res.render('index', { title: 'Home' });
      },
};

module.exports = indexCtrl;