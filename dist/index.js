'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MorrisDom = (function () {
    function MorrisDom() {
    }
    MorrisDom.walkNode = function (node, classList) {
        if (classList === void 0) { classList = []; }
        if (node.nodeValue) {
            return [{
                    text: node.nodeValue,
                    styles: classList
                }];
        }
        var classCandidate = node.getAttribute("class");
        var newClassList = classCandidate ? classList.concat([classCandidate]) : classList;
        return Array.from(node.childNodes).reduce(function (acc, node) {
            return acc.concat(MorrisDom.walkNode(node, newClassList));
        }, []);
    };
    return MorrisDom;
}());
var index = new MorrisDom();

exports.MorrisDom = MorrisDom;
exports.default = index;
