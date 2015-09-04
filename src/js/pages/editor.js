'use strict';
var React = require('react');
var request = require('superagent');

var PUBLIC_SERVER_URL = 'http://public.lightning-viz.org';

request
    .get(PUBLIC_SERVER_URL + '/visualization-types/' + window.lightning.editor.moduleName + '.json')
    .set('Accept', 'application/json')
    .end(function(err, res) {
        var viz = res.body;

        console.log('sample options');
        console.log(viz.sampleOptions);
        var Editor = require('../components/editor');
        React.render(<Editor datasets={viz.sampleData} images={viz.sampleImages} initialOptions={viz.sampleOptions} codeExamples={viz.codeExamples} moduleName={viz.moduleName} /> , document.getElementById('editor-component'));
    });

