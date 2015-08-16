'use strict';
var React = require('react');
var request = require('superagent');

var PUBLIC_SERVER_URL = 'http://localhost:3000';

request
    .get(PUBLIC_SERVER_URL + '/visualization-types/lightning-scatter.json')
    .set('Accept', 'application/json')
    .end(function(err, res) {

        var viz = res.body;
        var Editor = require('../components/editor');
        React.render(<Editor datasets={viz.sampleData} datasets={viz.sampleOptions} images={viz.sampleImages} moduleName={viz.moduleName} /> , document.getElementById('editor-component'));
    });

