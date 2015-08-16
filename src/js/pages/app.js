'use strict';


var $example = $('.example');
var ew = $example.width() * 0.66;
$example.css({'height':ew+'px'});

require('../lib/jquery.slides');


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

var LineStreaming = require('../lib/viz/line-streaming');

$('[line-data-streaming]').each(function() {

    console.log('streaming');
    console.log($(this));
    var selector = $(this).attr('id');
    console.log(selector);
    var ls = new LineStreaming('#' + selector, {series: [0]});
    console.log(ls);

    var t = 0;
    setInterval(function() {
        t += 0.3;
        ls.appendData({
            series: [Math.sin(t)]
        });
    }, 1000);
})

var ScatterStreaming = require('../lib/viz/scatter-streaming');

$('[scatter-data-streaming]').each(function() {

    var selector = $(this).attr('id');

    var centers = []
    var newpoints = []
    var labels = []
    for (var i = 0; i < 7; i++) {
        var tmp = [Math.random(1)*2, Math.random(1)*2]
        centers.push(tmp)
        newpoints.push(tmp)
        labels.push(i)
    }

    var ls = new ScatterStreaming('#' + selector, {points: centers, label: labels, size: [15]});

    setInterval(function() {

        for (var i = 0; i < 7; i++) {
            newpoints[i] = newpoints[i].map(function(d) { return d + (Math.random(1)-0.5)/3})
        }

        ls.appendData({
            points: newpoints,
            label: labels,
            size: [15]
        });
    }, 1000);
})
