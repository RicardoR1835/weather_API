var mongoose = require('mongoose');
require('../models/models.js');

var Weather = mongoose.model('Weather'); //Any name is okay

module.exports={
    index: function(req, res){
        res.render('index');
    },
}