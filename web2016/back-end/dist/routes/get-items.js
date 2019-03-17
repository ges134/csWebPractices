"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const in_memory_1 = require("../db/in-memory");
function getItemsRoute(request, response) {
    response.status(200).send({ items: in_memory_1.InMemoryDb.items });
}
exports.getItemsRoute = getItemsRoute;
//# sourceMappingURL=get-items.js.map