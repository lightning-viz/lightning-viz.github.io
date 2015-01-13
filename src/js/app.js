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


require('EasyTabs');

$('.tab-container').easytabs({
    updateHash: false
});


var hljs = require('highlight.js');
hljs.initHighlightingOnLoad();

var pym = require('pym.js');

$('[data-pym]').each(function(i) {
    console.log(i);
    var url = $(this).data('url');
    var id = $(this).attr('id');

    console.log(url, id);
    setTimeout(function() {
        new pym.Parent(id, url, {});    
    });
    
});
