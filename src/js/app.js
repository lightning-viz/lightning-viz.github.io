'use strict';


var $example = $('.example');
var ew = $example.width() * 0.66;
$example.css({'height':ew+'px'});

require('./lib/jquery.slides');


var width = $('.column-12').first().width();


$("#slides").slidesjs({
    width: width,
    height: 450,
    navigation: {
        active: false
    },
    pagination: {
        active: false
    }
});


var hljs = require('highlight.js');
hljs.initHighlightingOnLoad();
