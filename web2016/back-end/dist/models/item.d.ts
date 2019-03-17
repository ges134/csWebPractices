import { Bid } from "./bid";
export declare enum ITEM_TYPES {
    fixedPrice = "fixedPrice",
    bid = "bid"
}
export declare abstract class Item {
    id?: string;
    name: string;
    description: string;
    pictureUrls: string[];
    sellersName: string;
    abstract type: ITEM_TYPES;
}
export declare class BidItem extends Item {
    type: ITEM_TYPES;
    highestBid: number;
    bidHistory: Bid[];
}
export declare class FixedPriceItem extends Item {
    type: ITEM_TYPES;
    price: number;
}
