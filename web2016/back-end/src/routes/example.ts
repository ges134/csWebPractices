import { Request, Response } from "express";

export function exampleRoute(request: Request, response: Response) {
    // How to get a param from the url (ex: /api/:ip in nodejs route)
    const { param } = request.params;

    response.status(200).send({ test: param });
}
