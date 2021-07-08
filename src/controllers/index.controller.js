const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
}

indexCtrl.renderProductDetail = (req, res) => {
    res.render('productDetail');
}

indexCtrl.renderProductCart = (req, res) => {
    res.render('productCart');
}

indexCtrl.renderRegister = (req, res) => {
    res.render('register');
}

indexCtrl.renderLogin = (req, res) => {
    res.render('login');
}

module.exports = indexCtrl;