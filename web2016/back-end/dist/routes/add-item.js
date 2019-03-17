"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const in_memory_1 = require("../db/in-memory");
function addItemRoute(request, response) {
    const item = request.body;
    item.id = v4_1.default();
    in_memory_1.InMemoryDb.items[item.id] = item;
    response.status(200).send({ item });
}
exports.addItemRoute = addItemRoute;
//# sourceMappingURL=add-item.js.map