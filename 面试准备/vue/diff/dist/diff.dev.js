"use strict";

var ATTRS = 'ATTRS';
var REPLACE = 'REPLACE';
var TEXT = 'TEXT';
var REMOVE = 'REMOVE';
var Index = 0;

function diff(oldTree, newTree) {
  var patches = {};
  var index = 0;
  walk(oldTree, newTree, index, patches);
  return patches;
}

function isString(node) {
  return Object.prototype.toString.call(node) == '[object String]';
}

function diffChildren(oldChildren, newChildren, index, patches) {
  oldChildren.forEach(function (child, idx) {
    walk(child, newChildren[idx], ++Index, patches);
  });
} // 遍历节点差异


function walk(oldNode, newNode, index, patches) {
  var currentPath = [];

  if (!newNode) {
    currentPath.push({
      type: REMOVE,
      index: index
    });
  } else if (isString(oldNode) && isString(newNode)) {
    if (oldNode !== newNode) {
      currentPath.push({
        type: TEXT,
        text: newNode
      });
    }
  } else if (oldNode.type == newNode.type) {
    // 比较属性
    var attrs = diffAttr(oldNode.props, newNode.props);

    if (Object.keys(attrs).length > 0) {
      currentPath.push({
        type: ATTRS,
        attrs: attrs
      });
    } // 如果有子节点，遍历


    diffChildren(oldNode.child, newNode.child, index, patches);
  } else {
    // 说明节点被替换
    currentPath.push({
      type: REPLACE,
      newNode: newNode
    });
  }

  if (currentPath.length > 0) {
    patches[index] = currentPath;
  }
}

function diffAttr(oldAttrs, newAttrs) {
  var patch = {};

  for (var key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }

  for (var _key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(_key)) {
      patch[_key] = newAttrs[_key];
    }
  }

  return patch;
} // 属性变化 ATTRS 文本变化 TEXT 节点变化 REPLACE 不存在 REMOVE