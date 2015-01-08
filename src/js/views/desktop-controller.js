'use strict';

var _ = require('lodash');
var utils = require('../utils');
var htmlContent = require('../../templates/includes/desktop-content.jade');
var Viz = require('../viz/viz');

/*
 * View controller
 */
function DesktopViewController($el) {
    if (!(this instanceof DesktopViewController)) {
        return new DesktopViewController($el);
    }

    this.$el = $el;
    this.$el.html(htmlContent({
        // template variables go here
        // e.g.
        //
        // someVar: something
    }));


    // maybe you want to instantiate a vizualization:
    //
    // new Viz(this.$el.find('.viz-selector'));
}



DesktopViewController.prototype.destroy = function() {
    this.$el.find('*').unbind().html();
};

module.exports = DesktopViewController;
