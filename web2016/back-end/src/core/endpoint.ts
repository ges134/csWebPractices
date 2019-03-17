import { Request, Response } from "express";

export type Handle = (request: Request, response: Response) => any;

export class Endpoint {
    private validators: Handle[] = [];
    private handles: Handle[] = [];

    /* prettier-ignore */
    private validateContentType(request: Request, response: Response): boolean {
        if (request.headers["content-type"] !== "application/json") {
            response
                .status(400)
                .send("Content-type must be 'application/json'");
            return false;
        }

        return true;
    }

    /* prettier-ignore */
    private validateBodyExists(request: Request, response: Response): boolean {
        if (!request.body) {
            response.status(400).send("Missing item value in body.");
            return false;
        }

        return true;
    }

    mustValidateContentType(): Endpoint {
        this.validators.push(this.validateContentType);
        return this;
    }

    mustHaveBody(): Endpoint {
        this.validators.push(this.validateBodyExists);
        return this;
    }

    handle(callback: Handle): Endpoint {
        this.handles.push(callback);
        return this;
    }

    build(): Handle {
        return (request: Request, response: Response) => {
            try {
                for (const validator of this.validators) {
                    if (!validator(request, response)) {
                        return;
                    }
                }

                for (const handle of this.handles) {
                    handle(request, response);
                }
            } catch (e) {
                console.log(e);
                response.sendStatus(500);
            }
        };
    }
}
