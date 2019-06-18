var mongoose = require('mongoose');

//Below is example create a schema
var WeatherSchema = new mongoose.Schema({
    city: { type: String, required: 'Your name must be longer than 2 characters', trim: true, minlength: 2},
},{ timestamps: true })

mongoose.model('Weather', WeatherSchema); 