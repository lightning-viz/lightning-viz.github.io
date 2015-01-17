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

var LineStreaming = require('./lib/viz/line-streaming');

$('[data-streaming]').each(function() {

    console.log('streaming');
    console.log($(this));
    var selector = $(this).attr('id');
    console.log(selector);
    var ls = new LineStreaming('#' + selector, {series: [[0, 0, 0],[1, 1, 1]]});
    console.log(ls);

    setInterval(function() {

        ls.appendData({
            series: [[Math.random() * 20 - 10],[Math.random() * 20 - 5]]
        });
    }, 2000);
})
