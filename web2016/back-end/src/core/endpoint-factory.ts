import { Endpoint, Handle } from "./endpoint";

export class EndpointFactory {
    static post(handle: Handle): Handle {
        const endpoint = new Endpoint();

        return endpoint
            .mustValidateContentType()
            .mustHaveBody()
            .handle(handle)
            .build();
    }
}
