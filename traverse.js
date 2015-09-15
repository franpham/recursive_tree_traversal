/*global require, module,  __dirname */
/*jslint node: true */
'use strict';

// var traverse = {};

function Traverse(data) {
  this.tree = data;
}

function getValues(node, list, prop, isLeaf) {
  if (isLeaf === null || (isLeaf && node['is_leaf']) || (!isLeaf && !node['is_leaf'])) {
    list.push(node[prop]);
  }
  if (node.has_children) {
    for (var i = 0; i < node.children.length; i++) {
      getValues(node.children[i], list, prop, isLeaf);
    }
  }
}

Traverse.prototype.findAge = function() {};

Traverse.prototype.getAllNames = function() {
  var names = [];
  getValues(this.tree.root, names, 'name', null);
  return names;
};

Traverse.prototype.getAllAges = function() {
  var ages = [];
  getValues(this.tree.root, ages, 'age', null);
  return ages;
};

Traverse.prototype.getLeafNames = function() {
  var names = [];
  getValues(this.tree.root, names, 'name', true);
  return names;
};

Traverse.prototype.getLeafAges = function() {
  var ages = [];
  getValues(this.tree.root, ages, 'age', true);
  return ages;
};

Traverse.prototype.findAllParentsNames = function() {
  var names = [];
  getValues(this.tree.root, names, 'name', false);
  return names;
};

Traverse.prototype.findAllParentsAges = function() {
  var ages = [];
  getValues(this.tree.root, ages, 'age', false);
  return ages;
};

Traverse.prototype.findName = function(str) {
  function getNode(node) {
    if (node.name === str) {
      return node;
    }
    if (node.has_children) {
      for (var i = 0; i < node.children.length; i++) {
        var temp = getNode(node.children[i]);
        if (temp !== null)
          return temp;
      }
    }
    return null;
  }
  return getNode(this.tree.root);
};

/* exports the Class Traverse */
module.exports = Traverse;