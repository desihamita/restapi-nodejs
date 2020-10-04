'use strict';

module.exports = function (app){
    var jsonku = require ('./controller');
    app.route ('/')
        .get(jsonku.index);
    
    app.route('/showdata')
        .get(jsonku.showdata);
    
    app.route('/showdata/:id')
        .get(jsonku.showdataid);
};