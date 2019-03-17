import { Request, Response } from "express";
import { InMemoryDb } from "../db/in-memory";

export function getItemsRoute(request: Request, response: Response) {
    response.status(200).send({ items: InMemoryDb.items });
}
