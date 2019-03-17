import { Item } from "../models";

export class InMemoryDb {
    static items: { [id: string]: Item } = {};
}
