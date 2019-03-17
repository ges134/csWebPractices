import { Request, Response } from "express";
import uuid from "uuid/v4";
import { InMemoryDb } from "../db/in-memory";
import { Item } from "../models";

export function addItemRoute(request: Request, response: Response) {
    const item: Item = request.body;
    item.id = uuid();

    InMemoryDb.items[item.id] = item;

    response.status(200).send({ item });
}
