var visit = require('unist-util-visit');

module.exports = function() {
  return function (ast) {
    visit(ast, 'paragraph', function (node) {
      node.children.forEach(function(child) {
        if (child.type === 'text') {
          child.value = child.value.replace(/\n/g, ' ');
        }
      });
    });
  };
};
