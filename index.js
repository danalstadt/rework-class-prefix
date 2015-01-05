'use strict';

var isPresent = require('is-present');

module.exports = function classPrefix(prefix, options) {
  options = options || {};

  return function classPrefix(styling) {
    var walk = require('rework-walk');
    walk(styling, function(rule, node) {
      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {

        if (selector.indexOf('.') === 0) {
          if (isPresent(options.ignore)) {
            options.ignore.some(function() {
              
            });
          }

          return selector.split('.').join('.' + prefix);
        } else {
          return selector;
        }
      });
    });
  };
};
