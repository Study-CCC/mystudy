"use strict";

var allPatches;
var index = 0;

function patch(node, patches) {
  allPatches = patches;
  walk1(node);
}

function walk1(node) {
  var currentPatch = allPatches[index++];
  var childNodes = node.childNodes;

  if (childNodes) {
    childNodes.forEach(function (child) {
      return walk1(child);
    });
  }

  if (currentPatch) {
    doPatch(node, currentPatch);
  }
}

function doPatch(node, patches) {
  patches.forEach(function (patch) {
    switch (patch.type) {
      case ATTRS:
        for (var key in patch.attrs) {
          var value = patch.attrs[key];

          if (value) {
            setAttr(node, key, value);
          } else {
            node.removeAttribute[key];
          }
        }

        break;

      case TEXT:
        node.textContent = patch.text;
        break;

      case REMOVE:
        node.parentNode.removeChild(node);
        break;

      case REPLACE:
        var newNode = patch.newNode instanceof Element ? render(patch.newNode) : document.createTextNode(patch.newNode);
        node.parentNode.replaceChild(newNode, node);
        break;

      default:
        break;
    }
  });
}