
/*global require, module,  __dirname */
/*jslint node: true */

'use strict';
// var traverse = {};

function Traverse(data){
  this.tree = data;
}
/*
 * build the methods via prototype
 * the first one is free
 * uncomment the code below, then remove this comment
 */
Traverse.prototype.findAge = function() {};

Traverse.prototype.getAllNames = function() {
  function getNames(node, list) {
    list.push(node.name);
    if (node.has_children) {
      for (var i = 0; i < node.children.length; i++) {
        getNames(node.children[i], list);
      }
    }
  }
  var names = [];
  getNames(this.tree.root, names);
  // console.log('names: ' + names);
  return names;
}

Traverse.prototype.getAllAges = function() {
  // body...
};

Traverse.prototype.getLeafNames = function() {
  // body...
};

Traverse.prototype.getLeafAges = function() {
  // body...
};

Traverse.prototype.findAllParentsAges = function() {
  // body...
};

Traverse.prototype.findAllParentsNames = function() {
  // body...
};

Traverse.prototype.findName = function() {
  // body...
};

/* exports the Class Traverse */
module.exports = Traverse;