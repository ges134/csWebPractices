"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ITEM_TYPES;
(function (ITEM_TYPES) {
    ITEM_TYPES["fixedPrice"] = "fixedPrice";
    ITEM_TYPES["bid"] = "bid";
})(ITEM_TYPES = exports.ITEM_TYPES || (exports.ITEM_TYPES = {}));
class Item {
}
exports.Item = Item;
class BidItem extends Item {
    constructor() {
        super(...arguments);
        this.type = ITEM_TYPES.bid;
        this.bidHistory = [];
    }
}
exports.BidItem = BidItem;
class FixedPriceItem extends Item {
    constructor() {
        super(...arguments);
        this.type = ITEM_TYPES.fixedPrice;
    }
}
exports.FixedPriceItem = FixedPriceItem;
//# sourceMappingURL=item.js.map