import { Request, Response } from "express";
import uuid from "uuid/v4";
import { InMemoryDb } from "../db/in-memory";
import { Item } from "../models";

export function addItemRoute(request: Request, response: Response) {
    if (!request.body) {
        response.status(400).send("Missing item value in body.");
    }

    const item: Item = request.body;
    item.id = uuid();

    InMemoryDb.items[item.id] = item;

    response.status(200).send({ item });
}
