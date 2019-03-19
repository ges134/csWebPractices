import { Bid } from "./bid";

export enum ITEM_TYPES {
    fixedPrice = "fixedPrice",
    bid = "bid"
}

export abstract class Item {
    id?: string; // UUID
    name: string;
    description: string;
    pictureUrls: string[];
    sellersName: string;
    startDate: Date;
    abstract type: ITEM_TYPES;
}

export class BidItem extends Item {
    type = ITEM_TYPES.bid;
    highestBid: number;
    bidHistory: Bid[] = [];
    duration: number;
}

export class FixedPriceItem extends Item {
    type = ITEM_TYPES.fixedPrice;
    price: number;
}
