import { Request, Response } from "express";

export function exampleRoute(request: Request, response: Response) {
    // How to get a param from the url (ex: /api/:ip in nodejs route)
    if (!request.body) {
        response.status(400).send("Missing item param in body.");
    }

    const { item } = request.body;

    response.status(200).send({ test: param });
}
