import { Bid } from "./bid";

export enum ITEM_TYPES {
    fixedPrice = "fixedPrice",
    bid = "bid"
}

export interface Item {
    name: string;
    description: string;
    pictureUrls: string[];
    sellersName: string;
    isFixedPrice: ITEM_TYPES;
}

export class BidItem {
    isFixedPrice = ITEM_TYPES.bid;
    highestBid: number;
    bidHistory: Bid[] = [];
}

export class FixedPriceItem {
    isFixedPrice = ITEM_TYPES.fixedPrice;
    price: number;
}
