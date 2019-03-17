"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exampleRoute(request, response) {
    // How to get a param from the url (ex: /api/:ip in nodejs route)
    const { param } = request.params;
    response.status(200).send({ test: param });
}
exports.exampleRoute = exampleRoute;
//# sourceMappingURL=example.js.map