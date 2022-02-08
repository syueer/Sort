"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LinkListCollection = void 0;
var Sort_1 = require("./Sort");
var Node = /** @class */ (function () {
    function Node(value) {
        this.next = null;
        this.value = value;
    }
    return Node;
}());
var LinkListCollection = /** @class */ (function (_super) {
    __extends(LinkListCollection, _super);
    function LinkListCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkListCollection.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkListCollection.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('the linkList is empty');
        }
        var node = this.head;
        var count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        throw new Error('did not find the data in linkList');
    };
    Object.defineProperty(LinkListCollection.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var node = this.head;
            var count = 1;
            while (node.next !== null) {
                count++;
                node = node.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    LinkListCollection.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    };
    LinkListCollection.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            return false;
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    };
    LinkListCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = leftHand;
    };
    return LinkListCollection;
}(Sort_1.Sort));
exports.LinkListCollection = LinkListCollection;
