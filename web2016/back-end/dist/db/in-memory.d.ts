import { Item } from "../models";
export declare class InMemoryDb {
    static items: {
        [id: string]: Item;
    };
}
