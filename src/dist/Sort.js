"use strict";
exports.__esModule = true;
exports.Sort = void 0;
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sort;
}());
exports.Sort = Sort;
